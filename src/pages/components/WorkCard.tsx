import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type WorkCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  footnote: string;
  buttonLink: string;
};

const WorkCard: FC<WorkCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  footnote,
  buttonLink,
}) => {
  return (
    <div
      id="maincard"
      className="group flex flex-col md:flex-row bg-white rounded-md shadow-md w-full my-4 transition-all duration-500 hover:shadow-2xl relative"
    >
      <div className="relative h-full w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative h-full">
          <Image
            className="w-full h-full object-cover object-center"
            src={imageSrc}
            alt={title}
            layout="fill"
          />
          <div
            id="shade"
            className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-0"
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 px-4 p-8">
        <p className="absolute top-0 right-0 p-4 text-gray-400 font-bold">
          {subtitle}
        </p>
        <h2 className="text-2xl text-black font-bold my-2">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">{footnote}</p>
        <Link href={buttonLink}>
          <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 !important">
            <p>Les mer</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
