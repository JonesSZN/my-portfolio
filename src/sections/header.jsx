import { Container } from "../components/container";
import { AlignLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const UL = () => {
  const LIST = ["Demos", "About Me", "Work", "Blog", "All Pages"];
  return (
    <>
      <AlignLeft
        color="white"
        className="z-50 cursor-pointer md:hidden xl:hidden"
      />

      <ul className="hidden flex-row items-center gap-9 xl:flex">
        {LIST.map((item) => (
          <li className="">
            <a className="text-[16px] text-white" href="/">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Header = ({ bg }) => {
  return (
    <motion.header
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
          <a
            href="/"
            className="cursor-pointer text-[24px] text-white transition-all duration-300"
          >
            Parker Jones
          </a>
          <UL />
          <a
            className="hidden text-[16px] font-bold text-white transition-all duration-300 md:block lg:block"
            href="/"
          >
            Request a Project
          </a>
        </nav>
      </Container>
    </motion.header>
  );
};

export { Header };
