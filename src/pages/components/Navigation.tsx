import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
      className={`fixed z-10 top-0 left-0 w-full h-16 px-4 py-2 flex justify-center items-center transition-all ${
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
            <p className="cursor-pointer font-konit text-lg text-white hover:text-rose-500 transition duration-300 ease-in-out">
              JOSTEIN GJERTSEN
            </p>
          </ScrollLink>
        </li>
        <li>
          <Link href="https://github.com/gjrtsn">
            <FaGithub
              className="mx-4  hover:text-rose-500 transition duration-300 ease-in-out"
              size={28}
            />
          </Link>
        </li>
        <li className="flex justify-end flex-1 items-center font-bold space-x-16">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="cursor-pointer text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            Om
          </ScrollLink>
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="cursor-pointer text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            Arbeid
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="cursor-pointer text-white hover:text-rose-300 transition duration-300 ease-in-out"
          >
            Kontakt
          </ScrollLink>
          <button className="group cursor-pointer bg-transparent border-solid border-2 border-rose-500 rounded-sm w-16 h-8   hover:bg-pink-500  transition duration-300 ease-in-out">
            <p className="text-rose-500 group-hover:text-white transition duration-300 ease-in-out">
              CV
            </p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
