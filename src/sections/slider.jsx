import { Container } from "../components/container";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <section className="flex w-full justify-center bg-[#FFFFFF] py-24">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            margin: "-250px",
            once: true,
          }}
          transition={{
            type: "tween",
            duration: 2,
          }}
          className="flex gap-8 overflow-hidden"
        >
          <p className="whitespace-nowrap text-[20px] text-[#11181C]">
            Trusted by
          </p>
          <div className="flex shrink-0 overflow-hidden">
            <div className="logos-slide flex w-full">
              <img src="images/slider-one.svg" alt="" />
              <img src="images/slider-two.svg" alt="" />
              <img src="images/slider-three.svg" alt="" />
              <img src="images/slider-four.svg" alt="" />
              <img src="images/slider-five.svg" alt="" />
              <img src="images/slider-one.svg" alt="" />
              <img src="images/slider-two.svg" alt="" />
              <img src="images/slider-three.svg" alt="" />
              <img src="images/slider-four.svg" alt="" />
              <img src="images/slider-five.svg" alt="" />
            </div>
            <div className="logos-slide flex w-full">
              <img src="images/slider-one.svg" alt="" />
              <img src="images/slider-two.svg" alt="" />
              <img src="images/slider-three.svg" alt="" />
              <img src="images/slider-four.svg" alt="" />
              <img src="images/slider-five.svg" alt="" />
              <img src="images/slider-one.svg" alt="" />
              <img src="images/slider-two.svg" alt="" />
              <img src="images/slider-three.svg" alt="" />
              <img src="images/slider-four.svg" alt="" />
              <img src="images/slider-five.svg" alt="" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Slider };
