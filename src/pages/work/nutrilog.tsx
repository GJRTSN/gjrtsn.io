import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";

const workGjrtsn = () => {
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
          <h1 className="text-4xl font-bold mb-4">Nutrilog</h1>
          <p className="text-lg">
            Dette er en side som vil beskrive prosjektet www.nutrilog.no.
          </p>
        </div>
      </section>
    </>
  );
};

export default workGjrtsn;
