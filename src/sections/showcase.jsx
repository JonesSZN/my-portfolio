import { Container } from "../components/container";
import { ChevronRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="w-full">
      <h1 className="max-w-[400px] text-4xl text-[#11181C] lg:text-5xl">
        A limited showcase of my projects
      </h1>
    </div>
  );
};

const Cards = () => {
  const CARDS_OBJ = [
    {
      image: "images/cargo-image.svg",
      Heading:
        "We seamlessly blend cutting-edge technology, global connectivity, and unmatched expertise to redefine how businesses approach their supply chain challenges.",
      siteimage: "images/opencore-bg.png",
    },
    {
      image: "images/agent-image.svg",
      Heading:
        "We understand the importance of protecting what matters most to you. With our comprehensive insurance solutions, we aim to provide you with the peace of mind you deserve.",
      siteimage: "images/mediflow-bg.png",
    },
    {
      image: "images/slope-image.svg",
      Heading:
        "Slope is a cutting-edge fintech company at the forefront of financial innovation. We provide innovative solutions and services that empower individuals and businesses.",
      siteimage: "images/slope-site-image.jpg",
    },
    {
      image: "images/handcrafts-image.svg",
      Heading:
        "Natural and organic wood products that will perfectly suit your interior.",
      siteimage: "images/handcrafts-site-image.jpg",
    },
  ];

  return (
    <div className="mb-12 grid gap-16 lg:grid-cols-2">
      {CARDS_OBJ.map((card) => (
        <div className="group relative h-[599px] w-[360px] overflow-hidden rounded-2xl bg-[#ECEDEE] pl-8 pt-8 lg:h-[738px] lg:w-full lg:pl-12 lg:pt-12">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <img className="mb-6" src={card.image} alt="" />
              <p className="text-[#18px] text-[#687076]">{card.Heading}</p>
            </div>
            <div>
              <button className="group mb-8 flex items-center gap-2 font-bold text-[#003cd6] transition-all duration-200 hover:text-[#11181C]">
                More about project
                <ChevronRight className="text-[#003cd6] transition-all duration-200 group-hover:text-[#11181C]" />
              </button>

              <img
                className="w-full rounded-tl-xl object-cover object-top shadow-sm shadow-black/20 lg:aspect-[1.4]"
                src={card.siteimage}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Button = () => {
  return (
    <button className="group flex items-center gap-2 rounded-md border border-[#003cd6] border-[] bg-[#003cd6] px-[18px] py-2 text-[14px] font-bold text-white transition-all duration-300 hover:border hover:bg-white hover:text-[#003cd6]">
      More Projects
      <ChevronRight className="text-white transition-all duration-300 group-hover:text-[#003cd6]" />
    </button>
  );
};

const Showcase = () => {
  return (
    <section className="flex w-full justify-center bg-white py-40">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <Heading />
          <Cards />
          <Button />
        </div>
      </Container>
    </section>
  );
};

export { Showcase };
