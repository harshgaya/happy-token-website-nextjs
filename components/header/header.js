"use client";
import { INSTA_LINK, WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <header className="w-full h-[80px] bg-white fixed top-0 flex justify-between items-center px-10 z-20">
      <Link href={"/"}>
        {" "}
        <Image
          src={"/header/logo-ht.png"}
          height={62}
          width={117}
          alt="happy token logo"
        />
      </Link>

      <Image
        onClick={handleOpen}
        src={"/header/menu-ht.png"}
        height={25}
        width={44}
        alt="menu"
        className="md:hidden"
      />
      {open && (
        <div
          onClick={handleOpen}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
      <div
        className={`z-50 fixed top-0 right-0 h-full bg-white w-[200px] ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div className="flex flex-col items-start gap-5 py-5 px-5 ">
          <NavItem handleOpen={handleOpen} title={"About"} link={"/#about"} />
          <NavItem
            handleOpen={handleOpen}
            title={"Testimonials"}
            link={"/#testimonial"}
          />
          <NavItem
            handleOpen={handleOpen}
            title={"Contact"}
            link={"/contact"}
          />
          <NavItem
            handleOpen={handleOpen}
            title={"How It Works"}
            link={"/#how"}
          />

          <Link href={INSTA_LINK}>
            <button className="bg-customBlue px-3 py-3 rounded-md">
              <Image
                src={"/header/inst.png"}
                height={30}
                width={30}
                alt="instagram icon"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <NavItem title={"About"} link={"/#about"} />
        <NavItem title={"Testimonials"} link={"/#testimonial"} />
        <NavItem title={"Contact"} link={"/contact"} />
        <NavItem title={"How It Works"} link={"/#how"} />

        <Link href={INSTA_LINK}>
          <button className="bg-customBlue px-3 py-3 rounded-md">
            <Image
              src={"/header/inst.png"}
              height={30}
              width={30}
              alt="instagram icon"
            />
          </button>
        </Link>
      </div>
    </header>
  );
}

export function NavItem({ link, title, handleOpen }) {
  return (
    <Link onClick={handleOpen} href={link}>
      <p className="hover:text-customYellow">{title}</p>
    </Link>
  );
}
