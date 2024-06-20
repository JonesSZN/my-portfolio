import { Container } from "../components/container";

const Services = () => {
  const Left = () => {
    return (
      <div className="group mb-8 flex h-[54px] w-[179px] items-center justify-center rounded-md bg-[#202C3380] px-[3px] py-[7px] text-[20px] text-white lg:px-[4px] lg:py-0">
        <h1 class="relative overflow-hidden">
          <span class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-white transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
          I can help you with
        </h1>
      </div>
    );
  };
  const Right = () => {
    const CARD_OBJ = [
      {
        number: "01.",
        heading: "Design",
        description:
          "with a proven history of crafting websites and apps, I bring forth robust and user-centric digital designs. The conernstone fo any successful websites lies in a firm corporate branding.",
      },
      {
        number: "02.",
        heading: "Development",
        description:
          "I construct scalable websites from the ground up, seamlessly aligning them with the design. My primary emphasis lies in micro animations, transitions, and interactivity.",
      },
      {
        number: "03.",
        heading: "Full package",
        description:
          "From idea to execution, I specialize in delivering full-fledged websites. What sets me apart is my keen design sensibility and development expertise, allowing me to craft stuning projects.",
      },
    ];
    return (
      <div className="flex flex-col gap-12">
        {CARD_OBJ.map((card) => (
          <div className="flex gap-4">
            <p className="mt-2 text-[18px] text-white lg:mt-6">{card.number}</p>
            <div className="flex flex-col gap-12">
              <h2 className="text-4xl text-white lg:text-5xl">
                {card.heading}
              </h2>
              <p className="max-w-[550px] text-[18px] text-white">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="flex w-full justify-center bg-[#11181C] py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-96">
          <Left />
          <Right />
        </div>
      </Container>
    </section>
  );
};

export { Services };
