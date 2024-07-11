import { Container } from "../components/container";
import { AlignLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const UL = () => {
  return (
    <>
      <ul className="flex items-center gap-9">
        <li className="cursor-pointer">
          <Link
            className="text-[16px] text-white"
            activeClass="active"
            to={"work"}
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="text-[16px] text-white"
            activeClass="active"
            to={"achievement"}
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            About Me
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="text-[16px] text-white"
            activeClass="active"
            to={"faq"}
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            Faq
          </Link>
        </li>
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <motion.header
      id="header"
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: "tween",
        stiffness: 20,
        damping: 20,
        duration: 1.2,
      }}
      className="fixed z-[999] flex w-full justify-center bg-[#000000] py-4"
    >
      <Container>
        <nav className="z-50 flex items-center justify-between">
          <Link
            activeClass="active"
            to={"header"}
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="cursor-pointer text-[24px] text-white transition-all duration-300"
          >
            Parker Jones
          </Link>
          <UL />
          <a
            className="hidden text-[16px] font-bold text-white transition-all duration-300 md:block lg:block"
            href="mailto:pdjones0416@gmail.com"
          >
            Request a Project
          </a>
        </nav>
      </Container>
    </motion.header>
  );
};

export { Header };
