import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { getProjectList, getProjects } from "../../lib/services/workService";
import { Props, project } from "../../types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Archive = ({ project }: Props) => {
  const router = useRouter();
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getProjectList()
      .then((data: project[]) => {
        // data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setWorks(data);
      })
      .catch((error) => {});
  }, []);

  if (router.isFallback) {
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center text-center">
        Laster inn prosjekter ...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Jostein Gjertsen</title>
      </Head>
      <Navigation />
      <section
        id="work"
        className="bg-gray-800 min-h-screen flex items-center justify-center"
      >
        <div className="w-full mx-4 max-w-6xl mobile:w-screen mobile:max-w-3xl mobile:mx-4">
          <div
            id="goBack"
            className="flex items-center  mb-4 text-gray-400 hover:text-rose-500 transition duration-300 ease-in-out"
          >
            <Link href="/">
              <div className="flex items-center">
                <AiOutlineArrowLeft className=" " size={12} />
                <p className="ml-1 mobile:text-sm">Hjem</p>
              </div>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Arbeid</h1>
          <p className="text-lg">
            Dette er en komplett liste av prosjekter jeg har utført eller
            bidratt i.
          </p>
          <table className=" mt-12 w-full text-left">
            <thead>
              <tr className="text-slate-500 font-bold text-lg">
                <th className="">Dato</th>
                <th className="">Tittel</th>
                <th className=" mobile:hidden">Kategori</th>
                <th className=" mobile:hidden">Verktøy</th>
                <th className="flex justify-end mr-2">Linker</th>
                {/* <th className="text-center mobile:hidden">GitHub</th> */}
              </tr>
            </thead>
            <tbody className="">
              {works.map((project) => (
                <tr
                  key={project.slug}
                  className="hover:bg-slate-700 transition duration-200 ease-in-out"
                >
                  <td className="py-2 mobile:py-0 font-bold text-rose-400">
                    {project.date}
                  </td>
                  <td className="py-2 mobile:py-0 font-bold ">
                    <Link href={`/work${project.slug}`}>
                      <p className="text-slate-400 transition duration-300 ease-in-out hover:text-white">
                        {project.title}
                      </p>
                    </Link>
                  </td>
                  <td className="py-2 mobile:hidden text-sm text-gray-500">
                    <p
                      className="px-1 text-gray-500 border-gray-600 border-solid border-2 rounded-md text-sm font-konit"
                      style={{ display: "inline-block" }}
                    >
                      {project.category.toUpperCase()}
                    </p>
                  </td>

                  <td className="py-2 mobile:hidden text-sm text-gray-300">
                    {project.tech.join(", ")}
                  </td>

                  <td className="py-2 space-x-4 flex justify-end items-center mobile:space-x-1  ">
                    {project.demo ? (
                      <Link href={project.demo}>
                        <BiLinkExternal
                          className="hover:text-rose-500 transition duration-300 ease-in-out "
                          size={28}
                        />
                      </Link>
                    ) : (
                      <CgUnavailable className="text-gray-700" size={28} />
                    )}
                    <Link href={project.git}>
                      <FaGithub
                        className="hover:text-rose-500 transition duration-300 ease-in-out mobile:h-5 "
                        size={28}
                      />
                    </Link>
                  </td>
                  {/* <td className="py-2 flex justify-center mobile:hidden">
                    <Link href={project.git}>
                      <FaGithub
                        className="hover:text-rose-500 transition duration-300 ease-in-out mobile:mt-4 "
                        size={28}
                      />
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Archive;
