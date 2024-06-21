import { Container } from "../components/container";

const Slider = () => {
  return (
    <section className="flex w-full justify-center bg-[#FFFFFF] py-24">
      <Container>
        <div className="flex gap-8 overflow-hidden">
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
        </div>
      </Container>
    </section>
  );
};

export { Slider };
