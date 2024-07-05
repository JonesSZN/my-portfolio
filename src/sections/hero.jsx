import { Container } from "../components/container";
import { Button } from "../components/button";
import { motion } from "framer-motion";
import { useState } from "react";

const Content = () => {
  return (
    <div className="">
      <LeftContent />
    </div>
  );
};

const LeftContent = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        type: "tween",
        stiffness: 20,
        damping: 20,
        duration: 1,
      }}
      className="flex flex-col items-center justify-center lg:items-start"
    >
      <div className="group mb-8 flex max-w-[300px] items-center justify-center rounded-md bg-[#202C3380] px-[3px] py-[7px] text-[20px] text-white lg:px-[6px] lg:py-[8px]">
        <h1 class="relative overflow-hidden py-2">
          <span class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-white transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
          Hello I'm Parker, and I create...
        </h1>
      </div>

      <p className="mb-8 max-w-[300px] text-center text-5xl text-white lg:max-w-[600px] lg:text-left lg:text-6xl">
        Outstanding websites crafted with React
      </p>
      <p className="mb-12 max-w-[550px] text-center text-[20px] text-neutral-300 lg:text-left">
        I harness the power of HTML, CSS, TailwindCSS, and React to bring your
        digital vision to life.
      </p>
      <Button text={"Request a Project"} />
    </motion.div>
  );
};

const Hero = () => {
  const [bg, setBg] = useState(false);
  return (
    <section className="relative flex h-screen max-h-[1100px] w-full items-center justify-center overflow-hidden bg-[#000000] py-44">
      <img
        className={`absolute h-screen w-full bg-cover bg-center bg-no-repeat ${
          bg
            ? "opacity-30 transition-all duration-300"
            : "opacity-0 transition-all duration-300"
        }`}
        src="images/wrapper-image-2.jpg"
        alt=""
      />

      <motion.button
        initial={{
          x: "100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          stiffness: 20,
          damping: 20,
          duration: 2,
        }}
        onClick={() => setBg(!bg)}
        className=""
        type="button"
        class="absolute right-2 top-24 mb-2 me-2 cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-1 py-2 text-center text-sm font-medium text-white shadow-xl shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none xl:right-8 xl:top-32 xl:p-3 xl:px-5 xl:py-2.5 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800"
      >
        Background
      </motion.button>

      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Hero };
