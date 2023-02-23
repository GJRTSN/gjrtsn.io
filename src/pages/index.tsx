import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navigation from "./components/Navigation";

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="bg-welcome bg-cover bg-center bg-no-repeat bg-opacity-20 min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Jostein Gjertsen</h1>
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
  return (
    <section
      id="about"
      className="bg-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Om meg</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

const WorkSection = () => {
  return (
    <section
      id="work"
      className="bg-gray-800 min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Arbeid</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link href="/work">
          <button className=" border-solid border-2 border-rose-500 rounded-sm w-16 h-8">
            <p className="text-rose-400">Arkiv</p>
          </button>
        </Link>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Ta kontakt!</h1>
        <div className="flex justify-center items-center space-x-4">
          <Link href="https://github.com/gjrtsn">
            <p target="_blank" rel="noopener noreferrer">
              <FaGithub size={64} />
            </p>
          </Link>
          <Link href="https://linkedin.com/in/gjrtsn">
            <p target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={64} />
            </p>
          </Link>
          <Link href="mailto:josteingjertsen@gmail.com">
            <p target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={64} />
            </p>
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
