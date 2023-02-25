import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { WorkCardProps } from "../../types/types";

const WorkCard: FC<WorkCardProps> = ({
  thumbnail,
  title,
  category,
  description,
  tech,
  slug,
  flip,
}) => {
  return (
    <div
      id="maincard"
      className={`group flex flex-col md:flex-row bg-white rounded-md w-full max-w-6xl my-4 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 relative ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative h-full w-full md:w-1/2 mb-8 md:mb-0 mobile:hidden">
        <div className="relative h-full">
          <Image
            className="w-full h-full object-cover object-center"
            src={thumbnail}
            alt={title}
            layout="fill"
          />
          <div
            id="shade"
            className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-0"
          ></div>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center w-full ${
          flip ? "md:pl-8" : "md:pr-8"
        } md:w-1/2 px-4 p-8 md:order-2 ${flip ? "md:order-1" : "md:order-2"}`}
      >
        <Link href={`/work/${slug}`}>
          <h2 className="text-2xl text-black font-bold my-2 mobile:text-center">
            {title}
          </h2>
        </Link>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          {tech ? tech.join(", ") : "VS Code"}
        </p>

        <div className="flex justify-center">
          <Link href={`/work/${slug}`}>
            <button className="mt-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 !important">
              <p>Les mer</p>
            </button>
          </Link>
        </div>
        <p
          className={`absolute mobile:hidden ${
            flip ? "top-0 left-42 ml-36 mt-4" : "top-0 right-0 m-4"
          } px-1 text-gray-400 border-gray-300 border-solid border-2 rounded-md text-sm font-konit`}
        >
          {category ? category.toUpperCase() : "KATEGORI"}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
