import { Container } from "../components/container";
import { Button } from "../components/button";
import { motion } from "framer-motion";

const Specialist = () => {
  return (
    <section className="relative flex w-full justify-center bg-[#11181C] py-28">
      <Container className={"flex justify-center"}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            margin: "-240px",
            once: true,
          }}
          transition={{
            type: "tween",
            duration: 2,
          }}
          className="z-50 flex flex-col items-center"
        >
          <img
            className="absolute top-0 z-0 w-[650px]"
            src="images/colors-image.png"
            alt=""
          />
          <h1 className="z-50 mb-8 max-w-[450px] text-center text-4xl font-semibold text-white lg:text-5xl">
            Behind the code
          </h1>
          <p className="z-40 mb-12 max-w-[600px] text-center text-[20px] text-white lg:max-w-[600px]">
            “Behind the scenes of Exploring the passions and pursuits that
            inspire my coding journey.”
          </p>
          <Button text={"About Me"} />
        </motion.div>
      </Container>
    </section>
  );
};

export { Specialist };
