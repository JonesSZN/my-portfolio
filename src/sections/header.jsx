import { Container } from "../components/container";
import { AlignLeft } from "lucide-react";
import { motion } from "framer-motion";

const UL = () => {
  const LIST = ["Demos", "About Me", "Work", "Blog", "All Pages"];
  return (
    <>
      <AlignLeft color="white" className="cursor-pointer md:hidden lg:hidden" />
      <ul className="hidden flex-row items-center gap-9 lg:flex">
        {LIST.map((item) => (
          <li>
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
        stiffness: 10,
        damping: 5,
        duration: 1.8,
      }}
      className="fixed z-[999] flex w-full justify-center bg-[#000000] py-4"
    >
      <Container>
        <nav className="z-50 flex items-center justify-between">
          <a
            href="/"
            className="cursor-pointer text-[24px] text-white transition-all duration-300 hover:text-red-600"
          >
            Parker Jones
          </a>
          <UL />
          <a
            className="hidden text-[16px] font-bold text-white transition-all duration-300 hover:text-red-600 lg:block"
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
