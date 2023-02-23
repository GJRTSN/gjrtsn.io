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
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(5px)",
      }}
    >
      <ul className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <li>
          <Link href={baseLink}>
            <p className="font-bold text-lg">Jostein Gjertsen</p>
          </Link>
        </li>
        <li>
          <Link href={`${baseLink}#about`}>
            <p className="mx-4">Om</p>
          </Link>
        </li>
        <li>
          <Link href={`${baseLink}#work`}>
            <p className="mx-4">Arbeid</p>
          </Link>
        </li>
        <li>
          <Link href={`${baseLink}#contact`}>
            <p className="mx-4">Kontakt</p>
          </Link>
        </li>
        <button className=" border-solid border-2 border-rose-500 rounded-sm w-16 h-8">
          <p className="text-rose-400">CV</p>
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
