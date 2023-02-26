import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getProjectById,
  getAllProjectIds,
} from "../../../lib/services/workService";
import { project } from "../../../types/types";
import Navigation from "../../components/Navigation";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";

const ProjectPage = ({ project }: project) => {
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
    blogtitle3,
    blogtext3,
    blogpic3,
    blogtitle4,
    blogtext4,
    blogpic4,
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
                <p className="ml-1 mobile:text-sm">Hjem</p>
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
            {demo ? (
              <Link href={demo}>
                <BiLinkExternal
                  className="hover:text-rose-500 transition duration-300 ease-in-out mobile:mt-4"
                  size={28}
                />
              </Link>
            ) : (
              <CgUnavailable className="text-gray-600 mobile:mt-4" size={36} />
            )}

            <Link href={git}>
              <FaGithub
                className="hover:text-rose-500 transition duration-300 ease-in-out mobile:mt-4"
                size={28}
              />
            </Link>
          </div>
          <div id="article" className="mt-24">
            <div>
              <h2
                id="blogTitle1"
                className="text-2xl font-bold -mb-4 mobile:px-4"
              >
                {blogtitle1}
              </h2>
              <p id="blogText1" className="text-lg my-8 mobile:px-4">
                {blogtext1}
              </p>
              <img src={blogpic1} alt="" className="my-8" />
            </div>

            <div>
              <h2
                id="blogtitle2"
                className="text-2xl font-bold -mb-4 mobile:px-4"
              >
                {blogtitle2}
              </h2>
              <p id="blogText2" className="text-lg my-8 mobile:px-4">
                {blogtext2}
              </p>
              <img src={blogpic2} alt="" className="mt-8 mb-16" />
            </div>

            <div>
              <h2
                id="blogtitle3"
                className="text-2xl font-bold -mb-4 mobile:px-4"
              >
                {blogtitle3}
              </h2>
              <p id="blogText3" className="text-lg my-8 mobile:px-4">
                {blogtext3}
              </p>
              <img src={blogpic3} alt="" className="my-8" />
            </div>

            <div>
              <h2
                id="blogtitle4"
                className="text-2xl font-bold -mb-4 mobile:px-4"
              >
                {blogtitle4}
              </h2>
              <p id="blogText4" className="text-lg my-8 mobile:px-4">
                {blogtext4}
              </p>
              <img src={blogpic4} alt="" className="my-8" />
            </div>
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
