import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";

const Archive = () => {
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
        <div className="">
          <h1 className="text-4xl font-bold mb-4">Arbeid</h1>
          <p className="text-lg">
            Dette er en komplett liste av prosjekter jeg har utført eller vært
            en del av.
          </p>
          <ul className="mt-12">
            <li>
              <Link href="/work/nutrilog">
                <p className="font-bold text-lg">Nutrilog</p>
              </Link>
            </li>
            <li>
              <Link href="/work/gjrtsn">
                <p className="font-bold text-lg">GJRTSN</p>
              </Link>
            </li>
            <li>
              <Link href="/work/webapps">
                <p className="font-bold text-lg">Webpplikasjoner</p>
              </Link>
            </li>
            <li>
              <Link href="/work/komdes">
                <p className="font-bold text-lg">Kommunikasjonsdesign</p>
              </Link>
            </li>
            <li>
              <Link href="/work/uin">
                <p className="font-bold text-lg">
                  Utvikling av interaktive nettsteder
                </p>
              </Link>
            </li>
            <li>
              <Link href="/work/infark">
                <p className="font-bold text-lg">Informasjonsarkitektur</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Archive;
