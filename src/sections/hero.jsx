import { Container } from "../components/container";
import { Button } from "../components/button";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start">
      <div className="group mb-8 flex max-w-[300px] items-center justify-center rounded-md bg-[#202C3380] px-[3px] py-[7px] text-[20px] text-white lg:px-[6px] lg:py-[8px]">
        <h1 class="relative overflow-hidden py-2">
          <span class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-white transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
          Hello I'm Parker, and I create...
        </h1>
      </div>

      <p className="mb-8 max-w-[300px] text-center text-5xl text-white lg:max-w-[600px] lg:text-left lg:text-6xl">
        Outstanding websites crafted with Webflow
      </p>
      <p className="mb-12 max-w-[550px] text-center text-[20px] text-[#687076] lg:text-left">
        Webflow development tailored for design-focused companies, emphasizing
        meticulous attention to detail and unwavering passion.
      </p>
      <Button text={"Request a Project"} />
    </div>
  );
};
const Hero = () => {
  return (
    <section className="flex h-screen max-h-[1100px] w-full items-center justify-center bg-[#000000] py-44">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Hero };
