import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import ResumeBtn from "./ResumeBtn";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const linkProps = {
    className:
      "text-white hover:text-rose-300 transition duration-300 ease-in-out",
  };

  const isHome = router.pathname === "/";

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
      <ul className="font-sen flex justify-between items-center w-3/5 max-w-screen-xl mobile:w-screen ">
        <li className="mobile:hidden">
          {isHome ? (
            <ScrollLink
              to="welcome"
              smooth={true}
              duration={500}
              spy={true}
              {...linkProps}
            >
              <p className="cursor-pointer font-konit text-lg text-white hover:text-rose-500 transition duration-300 ease-in-out">
                JOSTEIN GJERTSEN
              </p>
            </ScrollLink>
          ) : (
            <Link href="/">
              <p className="cursor-pointer font-konit text-lg text-white hover:text-rose-500 transition duration-300 ease-in-out">
                JOSTEIN GJERTSEN
              </p>
            </Link>
          )}
          <ScrollLink
            href="/"
            to="/"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="text-white hover:text-rose-300 transition duration-300 ease-in-out"
          ></ScrollLink>
        </li>
        <li className="mobile:hidden">
          <Link href="https://github.com/gjrtsn">
            <FaGithub
              className="mx-4  hover:text-rose-500 transition duration-300 ease-in-out"
              size={28}
            />
          </Link>
        </li>
        <li className="flex justify-end flex-1 items-center font-bold space-x-16 mobile:justify-center ">
          {isHome ? (
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              {...linkProps}
            >
              Om
            </ScrollLink>
          ) : (
            <Link href="/#about">
              <p {...linkProps}>Om meg</p>
            </Link>
          )}
          {isHome ? (
            <ScrollLink
              to="work"
              smooth={true}
              duration={500}
              spy={true}
              {...linkProps}
            >
              Arbeid
            </ScrollLink>
          ) : (
            <Link href="/#work">
              <p {...linkProps}>Arbeid</p>
            </Link>
          )}
          {isHome ? (
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              {...linkProps}
            >
              Kontakt
            </ScrollLink>
          ) : (
            <Link href="/#contact">
              <p {...linkProps}>Kontakt</p>
            </Link>
          )}
          <ResumeBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
