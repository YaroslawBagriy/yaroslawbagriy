import React, { ReactElement } from "react";
import IProject from "../types/project";
import Link from "next/link";
import Image from "next/image";

const Project = (props: { content: IProject }): ReactElement => {
  const { imageUrl, title, slug, snippet } = props.content;

  return (
    <Link href={`/projects/${slug}`} passHref>
      <a>
        <div className="relative w-full rounded mb-5 overflow-hidden aspect-4/3">
          <Image src={imageUrl} layout="fill" objectFit="contain" alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-primary rounded opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center font-bold text-white text-xl">
            Read more
          </div>
        </div>
        <div className="prose">
          <h3 className="mb-2 text-xl">{title}</h3>
          <p>{snippet}</p>
        </div>
      </a>
    </Link>
  );
};

export default Project;
