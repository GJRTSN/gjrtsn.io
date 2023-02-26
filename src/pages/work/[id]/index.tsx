import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getProjectById,
  getAllProjectIds,
} from "../../../lib/services/workService";
import { Props, project } from "../../../types/types";
import Navigation from "../../components/Navigation";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ProjectPage = ({ project }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center text-center">
        Laster inn prosjekt...
      </div>
    );
  }

  const {
    title,
    category,
    tech,
    date,
    demo,
    git,
    blogtitle1,
    blogtext1,
    blogpic1,
    blogtitle2,
    blogtext2,
    blogpic2,
    blogtext3,
  } = project;

  return (
    <div>
      <Navigation />

      <section
        id="workPage"
        className="bg-gray-800 min-h-screen flex items-center justify-center"
      >
        <div
          id="workContainer"
          className="mt-32 w-1/2  max-w-6xl mobile:w-screen"
        >
          <div
            id="goBack"
            className="flex items-center mobile:ml-14 mb-4 text-gray-400 hover:text-rose-500 transition duration-300 ease-in-out"
          >
            <Link href="/">
              <div className="flex items-center">
                <AiOutlineArrowLeft className=" " size={12} />
                <p className="ml-1 mobile:text-sm">Tilbake</p>
              </div>
            </Link>
          </div>

          <h1 className="text-4xl font-bold mobile:text-center mb-4 ">
            {title}
          </h1>
          <div
            id="projectInfo"
            className="flex justify-between mobile:flex-col text-center items-center "
          >
            <h2>Kategori:</h2>
            <p className=" text-gray-500 mobile:mb-4">
              {category ? category.toUpperCase() : "KATEGORI"}
            </p>
            <h2>Verktøy:</h2>
            <p className=" text-gray-500 mobile:mb-4">{tech.join(", ")}</p>
            <h2>Dato:</h2>
            <p className=" text-gray-500 mobile:mb-4">{date}</p>
            <Link href={demo}>
              <BiLinkExternal
                className="hover:text-rose-500 transition duration-300 ease-in-out mobile:mt-4"
                size={28}
              />
            </Link>
            <Link href={git}>
              <FaGithub
                className="hover:text-rose-500 transition duration-300 ease-in-out mobile:mt-4"
                size={28}
              />
            </Link>
          </div>
          <div id="article" className="mt-24">
            <h2
              id="blogTitle1"
              className="text-2xl font-bold -mb-4 mobile:px-4"
            >
              {blogtitle1}
            </h2>
            <h2 id="blogText1" className="text-lg my-8 mobile:px-4">
              {blogtext1}
            </h2>
            <img src={blogpic1} alt={`${title} thumbnail`} className="my-8" />

            <h2
              id="blogtitle2"
              className="text-2xl font-bold -mb-4 mobile:px-4"
            >
              {blogtitle2}
            </h2>
            <p id="blogText2" className="text-lg my-8 mobile:px-4">
              {blogtext2}
            </p>
            <img src={blogpic2} alt={`${title} thumbnail`} className="my-8" />

            <p id="blogText3" className="text-lg mt-8 mb-64 mobile:px-4">
              {blogtext3}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
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

export default ProjectPage;
