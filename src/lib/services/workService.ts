import client from "../client";
import { GetStaticPaths, GetStaticProps } from "next";
import { project, Props } from "../../types/types";

export const getProjects = async () => {
  try {
    const data =
      await client.fetch(`*[_type == "projectdata" && spotlight == true] {
      date,
      "thumbnail": thumbnail.asset->url,
      title,
      "category": category,
      "description": description,
      "tech": tech[]->tech,
      "slug": slug,
      "date": date,
      spotlight
    }`);

    // Sort the data by the year and month
    data.sort((a, b) => {
      const [aYear, aMonth] = a.date.split("-");
      const [bYear, bMonth] = b.date.split("-");

      // Compare the years first
      if (aYear < bYear) return 1;
      if (aYear > bYear) return -1;

      // If the years are equal, compare the months
      if (aMonth < bMonth) return 1;
      if (aMonth > bMonth) return -1;

      return 0;
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProjectById = async (id: string) => {
  try {
    const data = await client.fetch(
      `*[_type == "projectdata" && slug == $id][0] {
          "thumbnail": thumbnail.asset->url,
          title,
          "category": category,
          "description": description,
          "tech": tech[]->tech,
          images[] {
            asset-> {
              url
            }
          },
          "slug": "/" + slug,
          "date": date,
          "demo": demo,
          "git": git,
          article {
            articleSections[] {
              blogTitle,
              bodyPortableText,
              "blogPic": blogPic.asset->url
            }
          }
        }`,
      { id }
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// articleSections[] {
//   blogTitle,
//   body,
//   "blogPic": blogPic.asset->url
// },

// export const getProjectById = async (id: string) => {
//   try {
//     const data = await client.fetch(
//       `*[_type == "project" && slug == $id][0] {
//         "thumbnail": thumbnail.asset->url,
//         title,
//         "category": category,
//         "description": description,
//         "tech": tech[]->tech,
//         images[] {
//           asset-> {
//             url
//           }
//         },
//         "slug": "/" + slug,
//         "date": date,
//         "demo": demo,
//         "git": git,
//         "blogtitle1": blogtitle1,
//         "blogtext1": blogtext1,
//         "blogpic1": blogpic1.asset->url,
//         "blogtitle2": blogtitle2,
//         "blogtext2": blogtext2,
//         "blogpic2": blogpic2.asset->url,
//         "blogtitle3": blogtitle3,
//         "blogtext3": blogtext3,
//         "blogpic3": blogpic3.asset->url,
//         "blogtitle4": blogtitle4,
//         "blogtext4": blogtext4,
//         "blogpic4": blogpic4.asset->url,
//       }`,
//       { id }
//     );

//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const getProjectList = async () => {
  try {
    const data = await client.fetch(
      `*[_type == "projectdata"] {
        title,
        category,
        "tech": tech[]->tech,
        "date": date,
        "demo": demo,
        "git": git,
        "slug": "/" + slug,
        
      }`
    );

    // Sort the data by date
    data.sort((a, b) => {
      const [aMonth, aYear] = a.date.split(".");
      const [bMonth, bYear] = b.date.split(".");

      // Compare the years first
      if (aYear < bYear) return 1;
      if (aYear > bYear) return -1;

      // If the years are equal, compare the months
      if (aMonth < bMonth) return 1;
      if (aMonth > bMonth) return -1;

      return 0;
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllProjectIds = async () => {
  const projects = await client.fetch(`*[_type == "project"] { slug }`);
  return projects.map((project) => ({
    params: {
      id: project.slug.substr(1),
    },
  }));
};

export const getResume = async () => {
  const data = await client.fetch(`
    *[_type == "files"] {
      "fileUrl": file.asset->url
    }
  `);
  return data[0].fileUrl;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProjectIds();
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = await getProjectById(params?.id as string);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
