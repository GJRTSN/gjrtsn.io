import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Navigation from "./components/Navigation";
import { useInView } from "react-intersection-observer";
import WorkCard from "./components/WorkCard";
import { useEffect, useState } from "react";
import { getProjects } from "../lib/services/workService";
import { AiOutlineMessage, AiFillDownCircle } from "react-icons/ai";
import { project } from "../types/types";
import { Link as ScrollLink } from "react-scroll";

const WelcomeSection = () => {
  const linkProps = {
    className:
      "text-white hover:text-rose-300 transition duration-300 ease-in-out",
  };

  return (
    <section
      id="welcome"
      className="bg-welcome bg-cover bg-center bg-no-repeat bg-opacity-20 min-h-screen flex items-center justify-center relative"
    >
      <div className="z-10 max-w-6xl mobile:px-4 mobile:max-w-3xl">
        <h1 className="inline-block text-4xl font-michroma mb-8 hover:text-rose-500 transition duration-300 ease-in-out">
          Jostein Gjertsen
        </h1>
        <p className="text-lg">
          Hei! Jeg er en student som går siste semester på en bachelorgrad i
          Digitale medier og design.
        </p>
        <p className="text-lg">
          Denne siden er en introduksjon av meg og mitt arbeid, bla nedover for
          å se mer!
        </p>
        <div className="  flex justify-center mt-24  hover:text-rose-500 transition duration-300 ease-in-out mobile:mt-8">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            {...linkProps}
          >
            <AiFillDownCircle
              className="  hover:text-rose-500 transition duration-300 ease-in-out"
              size={32}
            />
          </ScrollLink>
        </div>
      </div>
      <div className="absolute  bottom-0 left-0 w-full h-1/2">
        <div className="h-full w-full bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 1.0, triggerOnce: true });

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-indigo-900 min-h-screen flex items-center justify-center"
    >
      <div
        className="w-1/2  max-w-6xl flex-col items-center justify-center mobile:w-screen px-4 mobile:max-w-3xl"
        ref={ref}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease-out" }}
      >
        <h1 className="text-4xl font-bold mb-4">Om meg</h1>
        <div className="flex">
          <div className="flex flex-col">
            <p className="mobile:w-full">
              Jeg kommer opprinnelig fra Tønsberg, men bor for øyeblikket i
              Halden i forbindelse med utdanning. Jeg går siste semester på en
              IT-relatert bachelorgrad som jeg tar på Høgskolen i Østfold.
            </p>
            <p className="mt-4 mobile:w-full">
              Studiet har hatt fokus på blant annet webutikling,
              informasjonsarkitektur, og designmetoder. Jeg ble først kjent med
              koding i 2021 og siden det har interessen økt betraktelig. Selv
              trives jeg veldig godt med front-end utvikling og har blitt godt
              kjent med React. Se noe av mitt arbeid lenger ned på siden eller
              besøk min GitHub-profil.
            </p>
            <div className="flex mt-8 space-x-4 mobile:justify-center">
              <Link href="https://github.com/GJRTSN">
                <FaGithub
                  className=" hover:text-rose-500 transition duration-300 ease-in-out"
                  size={42}
                />
              </Link>
              <Link href="https://linkedin.com/in/gjrtsn">
                <FaLinkedin
                  className=" hover:text-rose-500 transition duration-300 ease-in-out"
                  size={48}
                />
              </Link>
            </div>
          </div>

          {/* <div className="w-2/5 min-h-64 mobile:hidden">
            <Image
              className="shadow-2xl "
              src="https://media.licdn.com/dms/image/C4D03AQFSXygKgD6kbA/profile-displayphoto-shrink_800_800/0/1596528788276?e=1682553600&v=beta&t=C9OmWsGh9VYr1t6_psD4Z69seAba7KNmDg29cqlOIww"
              alt=""
              width={1000}
              height={1000}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const { ref, inView } = useInView({ threshold: 1.0, triggerOnce: true });
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data: project[]) => {
        // data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setWorks(data.slice(0, 3));
      })
      .catch((error) => {});
  }, []);

  return (
    <section id="work" className="bg-indigo-900 min-h-full z-0">
      <div className="h-full w-1/2 max-w-6xl flex-col justify-center mx-auto mobile:w-screen px-2 mobile:max-w-3xl">
        <Link href="/work">
          {" "}
          <h1 className="inline-block text-4xl font-bold py-4 transition duration-300 ease-in-out hover:text-rose-500">
            Arbeid
          </h1>
        </Link>
        <p className="text-lg">
          Her er noe av mitt arbeid jeg ønsker å fremheve.
        </p>

        <div className="flex flex-wrap justify-center z-0 h-full">
          {works.map((work, index) => (
            <WorkCard
              key={work.slug}
              {...work}
              flip={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/work">
            <button className="my-10 bg-rose-500 hover:bg-pink-600 text-white py-4 px-10 rounded-md transition duration-300 ease-in-out  hover:shadow-2xl">
              <p className="font-bold">Arkiv</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 1.0, triggerOnce: true });

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-indigo-900 to-black min-h-screen flex items-center justify-center"
    >
      <div
        className="text-center"
        ref={ref}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease-out" }}
      >
        <div className="flex justify-center space-x-4">
          <h1 className="text-4xl font-bold mb-16">Ta kontakt!</h1>
          <AiOutlineMessage className="mt-1" size={32} />
        </div>
        <div className="flex justify-center items-center space-x-4">
          <Link
            href="https://linkedin.com/in/gjrtsn"
            className="inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-blue-500"
          >
            <FaLinkedin size={64} />
          </Link>
          <Link
            href="mailto:josteingjertsen@gmail.com"
            className="inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-green-300"
          >
            <FaEnvelope size={64} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Jostein Gjertsen</title>
        <meta name="description" content="Front-end utvikler bosatt i Oslo." />
        <meta property="og:title" content="Front-end utvikler bosatt i Oslo." />

        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/4jvb58kl/production/84742adb5d084f2b751c93a6fea3f1a665e6d2f2-1280x720.webp"
        />
        <meta property="og:url" content="https://www.gjrtsn.io/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gjrtsn.io/" />
      </Head>
      <Navigation />
      <WelcomeSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
