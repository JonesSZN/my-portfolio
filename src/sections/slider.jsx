import { Container } from "../components/container";
import { motion } from "framer-motion";

const Slider = () => {
  const IMAGE_DATA = [
    "images/slider-one.svg",
    "images/slider-two.svg",
    "images/slider-three.svg",
    "images/slider-four.svg",
    "images/slider-five.svg",
    "images/slider-one.svg",
    "images/slider-two.svg",
    "images/slider-three.svg",
    "images/slider-four.svg",
    "images/slider-five.svg",
  ];
  return (
    <section className="flex w-full justify-center bg-[#FFFFFF] pt-24 xl:py-24">
      <Container>
        <div className="flex gap-8 overflow-hidden">
          <p className="whitespace-nowrap text-[20px] text-[#11181C]">
            Trusted by
          </p>
          <div className="flex shrink-0 overflow-hidden">
            {/* slider-1 */}
            <div className="logos-slide flex w-full">
              {IMAGE_DATA.map((image) => (
                <img src={image} alt="" />
              ))}
            </div>

            {/* slider-2 */}
            <div className="logos-slide flex w-full">
              {IMAGE_DATA.map((image) => (
                <img src={image} alt="" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Slider };
