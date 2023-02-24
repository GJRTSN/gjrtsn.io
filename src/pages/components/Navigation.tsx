import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
      <ul className="font-sen flex justify-between items-center w-full max-w-screen-xl ">
        <li>
          <ScrollLink
            to="welcome"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            <p className="font-bold text-lg text-white">Jostein Gjertsen</p>
          </ScrollLink>
        </li>
        <li className="flex justify-end flex-1 items-center space-x-16">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            Om
          </ScrollLink>
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            Arbeid
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            Kontakt
          </ScrollLink>
          <button className="bg-transparent border-solid border-2 border-rose-500 rounded-sm w-16 h-8   hover:bg-gradient-to-r from-rose-500 to-pink-500 transition duration-1000 ease-in-out">
            <p className="text-white">CV</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
