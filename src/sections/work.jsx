import { Container } from "../components/container";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="flex w-full justify-center bg-white py-12">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            margin: "-150px",
            once: true,
          }}
          transition={{
            type: "tween",
            duration: 2,
          }}
          className="flex rounded-2xl bg-[#083DD5] px-[20px] py-[60px] ring-[10px] ring-neutral-300 lg:p-[100px]"
        >
          <div className="flex flex-col gap-8">
            <h1 className="max-w-[560px] text-4xl font-semibold text-white lg:text-5xl">
              Interested in working with me?
            </h1>
            <button className="group flex items-center gap-2 font-bold text-white transition-all duration-200 hover:text-neutral-300/75">
              Request a project
              <ChevronRight className="text-white transition-all duration-200 group-hover:text-neutral-300/75" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Work };
