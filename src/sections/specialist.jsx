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
          <h1 className="z-50 mb-8 max-w-[500px] text-center text-4xl font-semibold text-white lg:text-5xl">
            I Specialize in Frontend Development
          </h1>
          <p className="z-40 mb-12 max-w-[800px] text-center text-[20px] text-white lg:max-w-[770px]">
            Specializing in the art of front-end development, I harness the
            power of HTML, CSS, TailwindCSS, and React to create websites that
            are not only aesthetically pleasing but also intuitively functional.
            My focus is on delivering user-centric digital experiences that are
            both engaging and efficient.
          </p>
          <Button text={"About Me"} />
        </div>
      </Container>
    </section>
  );
};

export { Specialist };
