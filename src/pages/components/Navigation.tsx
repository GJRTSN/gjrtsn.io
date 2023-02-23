import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const baseLink = "/";

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 px-4 py-2 flex justify-center items-center transition-all ${
        visible ? "" : "-translate-y-full"
      }`}
      style={{
        background: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <ul className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <li>
          <Link href="#welcome">
            <p className="font-bold text-lg text-white">Jostein Gjertsen</p>
          </Link>
        </li>
        <li className="flex justify-end flex-1 space-x-24">
          <Link href="#about">
            <p className="text-white">Om</p>
          </Link>
          <Link href="#work">
            <p className="text-white">Arbeid</p>
          </Link>
          <Link href="#contact">
            <p className="text-white">Kontakt</p>
          </Link>
          <button className=" border-solid border-2 border-rose-500 rounded-sm w-16 h-8">
            <p className="text-rose-400">CV</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
