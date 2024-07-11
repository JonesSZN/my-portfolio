import { Container } from "../components/container";
import { motion } from "framer-motion";

const Slider = () => {
  const IMAGE_DATA = [
    "images/html-slider-logo.png",
    "images/css-slider-logo.png",
    "images/react-slider-logo.png",
    "images/tailwind-slider-logo.png",
    "images/framer-slider-logo.png",
    "images/js-slider-logo.png",
    "images/nextjs-slider-logo.png",
    "images/github-slider-logo.png",
    "images/node-slider-logo.png",
    "images/typescript-slider-logo.png",
  ];
  return (
    <section className="flex w-full justify-center bg-[#FFFFFF] pt-24 xl:pt-24">
      <Container>
        <div className="flex gap-8 overflow-hidden">
          <p className="whitespace-nowrap text-[20px] text-[#11181C]">
            Technologies
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
