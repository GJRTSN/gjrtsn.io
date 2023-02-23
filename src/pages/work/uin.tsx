import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";

const workUin = () => {
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
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Utvikling av interaktive nettsteder
          </h1>
          <p className="text-lg">
            Dette er en side som vil beskrive prosjektet fra Utvikling av
            interaktive nettsteder.
          </p>
        </div>
      </section>
    </>
  );
};

export default workUin;
