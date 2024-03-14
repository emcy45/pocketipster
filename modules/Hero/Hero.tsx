"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import Logo from "@/public/images/Logo.svg";
import Link from "next/link";

export const Hero: FunctionComponent = () => {
  return (
    <>
      <div className="md:mb-6 mb-2 ">
        <div className="w-full flex justify-center">
          <div className="relative">
            <Link href="/">
              <Image src={Logo} alt="Logo" priority={true} />
            </Link>
          </div>
        </div>
        <div className="mx-auto mx-w-xl grid grid-cols-3 justify-items-center md:gap-16 gap-4 max-w-xl text-secondary-500 font-bold  pb-4 pt-2  border-b-primary-500 border-b-2">
          <div className="hover:text-tertiary-500">
            <Link href="/tipster">Typer</Link>
          </div>
          <div className="hover:text-tertiary-500">
            <Link href="/table">Tabela</Link>
          </div>
          <div className="hover:text-tertiary-500">
            <Link href="/results">Wyniki</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
