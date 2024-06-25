import { Container } from "../components/container";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Cards = () => {
  const CARDS_OBJ = [
    {
      image: "images/hrflow-logo.webp",
      Heading:
        "We seamlessly blend cutting-edge technology, global connectivity, and unmatched expertise to redefine how businesses approach their supply chain challenges.",
      siteimage: "images/hrflow-bg.png",
      link: "https://jonesszn.github.io/hr-flow/",
    },
    {
      image: "images/mediflow-logo.svg",
      Heading:
        "We understand the importance of protecting what matters most to you. With our comprehensive insurance solutions, we aim to provide you with the peace of mind you deserve.",
      siteimage: "images/mediflow-bg.png",
      link: "https://jonesszn.github.io/mediflow/",
    },
    {
      image: "images/smarter-logo.svg",
      Heading:
        "Slope is a cutting-edge fintech company at the forefront of financial innovation. We provide innovative solutions and services that empower individuals and businesses.",
      siteimage: "images/smarter-bg.png",
      link: "https://jonesszn.github.io/smarter-site/",
    },
    {
      image: "images/origin-logo.svg",
      Heading:
        "Natural and organic wood products that will perfectly suit your interior.",
      siteimage: "images/origin-bg.png",
      link: "https://jonesszn.github.io/origin-site/",
    },
  ];

  return (
    <div className="mb-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
      {CARDS_OBJ.map((card) => (
        <div className="group relative h-[599px] w-[360px] overflow-hidden rounded-2xl bg-[#ECEDEE] pl-8 pt-8 lg:h-[738px] lg:w-full lg:pl-12 lg:pt-12">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <img
                className="mb-4 h-[50px] w-[160px] object-contain"
                src={card.image}
                alt=""
              />

              <p className="max-w-[460px] text-[#18px] text-[#687076]">
                {card.Heading}
              </p>
            </div>
            <div>
              <button className="group mb-8 flex items-center gap-2 font-bold text-[#003cd6] transition-all duration-200 hover:text-[#11181C]">
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  {" "}
                  View Project
                </a>

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="group flex items-center gap-2 rounded-md border border-[#003cd6] border-[] bg-[#003cd6] px-[18px] py-2 text-[14px] font-bold text-white transition-all duration-300 hover:border hover:bg-white hover:text-[#003cd6]"
    >
      More Projects
      <ChevronRight className="text-white transition-all duration-300 group-hover:text-[#003cd6]" />
    </button>
  );
};

const Showcase = () => {
  const Heading = () => {
    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          margin: "-180px",
          once: true,
        }}
        transition={{
          type: "tween",
          duration: 2,
        }}
        className="w-full"
      >
        <h1 className="max-w-[400px] text-4xl text-[#11181C] lg:text-5xl">
          A limited showcase of my projects
        </h1>
      </motion.div>
    );
  };

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
