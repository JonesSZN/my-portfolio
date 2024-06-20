import { Container } from "../components/container";
import { Button } from "../components/button";

const Specialist = () => {
  return (
    <section className="relative flex w-full justify-center bg-[#11181C] py-28">
      <Container className={"flex justify-center"}>
        <div className="flex flex-col items-center">
          <img
            className="absolute top-0 w-[650px]"
            src="images/colors-image.png"
            alt=""
          />
          <h1 className="z-50 mb-8 max-w-[450px] text-center text-4xl font-semibold text-white lg:text-5xl">
            I'm known as the Webflow specialist
          </h1>
          <p className="z-40 mb-12 max-w-[800px] text-center text-[20px] text-white lg:max-w-[770px]">
            Passionate Webflow developer with a flair for turning design dreams
            into functional, pixel-perfect websites. I specialize in crafting
            seamless digital experiences, and I'm excited to showcase a
            selection of my work here.
          </p>
          <Button text={"About Me"} />
        </div>
      </Container>
    </section>
  );
};

export { Specialist };
