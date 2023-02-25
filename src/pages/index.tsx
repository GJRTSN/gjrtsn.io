import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import Navigation from "./components/Navigation";
import { useInView } from "react-intersection-observer";
import WorkCard from "./components/WorkCard";
import { useEffect, useState } from "react";
import { getProjects } from "../lib/services/workService";
import { AiOutlineMessage } from "react-icons/ai";

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="bg-welcome bg-cover bg-center bg-no-repeat bg-opacity-20 min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-michroma mb-8">Jostein Gjertsen</h1>
        <p className="text-lg">
          Jeg er en front-end utvikler med en bachelorgrad i Digitale medier og
          design fra Høgskolen i Østfold.
        </p>
        <p className="text-lg">
          Denne siden er en introduksjon av meg og mitt arbeid, og er laget med
          Next.js, Tailwind og Sanity.
        </p>
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
        className="w-1/2 flex-col items-center justify-center text-center"
        ref={ref}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease-out" }}
      >
        <h1 className="text-4xl font-bold mb-4">Om meg</h1>

        <p className="text-lg text-center">
          Hei! Mitt navn er Jostein Gjertsen og jeg kommer opprinnelig fra
          Tønsberg. For øyeblikket går jeg siste semester på en bachelorgrad som
          jeg tar på Høgskolen i Østfold i Halden. Jeg ble først kjent med
          webutvikling i 2021 da jeg hadde et kurs om det i studiet, og
          interessen for dette økte og økte.
        </p>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const { ref, inView } = useInView({ threshold: 1.0, triggerOnce: true });
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setWorks(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <section id="work" className="bg-indigo-900 min-h-full z-0">
      <div
        className="h-full w-1/2 flex-col justify-center mx-auto"
        // ref={ref}
        // style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease-out" }}
      >
        <h1 className="text-4xl font-bold py-4">Arbeid</h1>
        <p className="text-lg">
          Her er noe av mitt arbeid jeg ønsker å fremheve.
        </p>

        <div className="flex flex-wrap justify-center z-0 h-full">
          {works.map((work) => (
            <WorkCard key={work.slug} {...work} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/work">
            <button className="my-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-10 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-2xl">
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
          <Link href="https://linkedin.com/in/gjrtsn">
            <FaLinkedin size={64} />
          </Link>
          <Link href="mailto:josteingjertsen@gmail.com">
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
