import { Container } from "../components/container";

import { motion } from "framer-motion";

const UL = () => {
  return (
    <>
      <ul className="flex items-center gap-9">
        <li className="cursor-pointer">
          <p
            onClick={() => {
              const element = document.getElementById("showcase");

              element.scrollIntoView();
            }}
            className="text-[16px] text-white"
          >
            Work
          </p>
        </li>
        <li className="cursor-pointer">
          <p
            onClick={() => {
              const element = document.getElementById("achievement");

              element.scrollIntoView();
            }}
            className="text-[16px] text-white"
          >
            About me
          </p>
        </li>
        <li className="cursor-pointer">
          <p
            onClick={() => {
              const element = document.getElementById("faq");

              element.scrollIntoView();
            }}
            className="text-[16px] text-white"
          >
            Faq
          </p>
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
          <p
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer text-[24px] text-white transition-all duration-300"
          >
            Parker Jones
          </p>
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
