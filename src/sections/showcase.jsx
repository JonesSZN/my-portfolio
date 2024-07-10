import { Container } from "../components/container";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const CARDS_OBJ = [
  {
    image: "images/careplus-logo.svg",
    Heading:
      "We seamlessly blend cutting-edge technology, global connectivity, and unmatched expertise to redefine how businesses approach their supply chain challenges.",
    siteimage: "images/care-site-bg.png",
    link: "https://jonesszn.github.io/careplus-site/",
    link2: "https://careplus-template.webflow.io/",
    link3: "https://github.com/JonesSZN/careplus-site",
  },
  {
    image: "images/mediflow-logo.svg",
    Heading:
      "We understand the importance of protecting what matters most to you. With our comprehensive insurance solutions, we aim to provide you with the peace of mind you deserve.",
    siteimage: "images/mediflow-bg.png",
    link: "https://jonesszn.github.io/mediflow/",
    link2: "https://mediflow-template.webflow.io/",
    link3: "https://github.com/JonesSZN/mediflow",
  },
  {
    image: "images/smarter-logo.svg",
    Heading:
      "Slope is a cutting-edge fintech company at the forefront of financial innovation. We provide innovative solutions and services that empower individuals and businesses.",
    siteimage: "images/smarter-bg.png",
    link: "https://jonesszn.github.io/smarter-site/",
    link2:
      "https://ovo-smarter.webflow.io/#:~:text=Make%20boring%20text%20and%20data,easy%20to%20understand%20and%20interpret.",
    link3: "https://github.com/JonesSZN/smarter-site",
  },
  {
    image: "images/origin-logo.svg",
    Heading:
      "Natural and organic wood products that will perfectly suit your interior.",
    siteimage: "images/origin-bg.png",
    link: "https://jonesszn.github.io/origin-site/",
    link2: "https://ego-origin-tmpl.webflow.io/",
    link3: "https://github.com/JonesSZN/origin-site",
  },
  {
    image: "images/specialist-logo.png",
    Heading:
      "We seamlessly blend cutting-edge technology, global connectivity, and unmatched expertise to redefine how businesses approach their supply chain challenges.",
    siteimage: "images/specialist-site-bg.png",
    link: "https://jonesszn.github.io/specialist-site/",
    link2: "https://preview.colorlib.com/theme/framework/",
    link3: "https://github.com/JonesSZN/specialist-site",
  },
  {
    image: "images/hrsite-logo.webp",
    Heading:
      "We understand the importance of protecting what matters most to you. With our comprehensive insurance solutions, we aim to provide you with the peace of mind you deserve.",
    siteimage: "images/hrflow-site-bg.png",
    link: "https://jonesszn.github.io/hr-flow/",
    link2: "https://hrflow-tnc-landing-page.webflow.io/",
    link3: "https://github.com/JonesSZN/hr-flow",
  },
  {
    image: "images/oraxol-logo.png",
    Heading:
      "We understand the importance of protecting what matters most to you. With our comprehensive insurance solutions, we aim to provide you with the peace of mind you deserve.",
    siteimage: "images/oxaxol-site-bg.png",
    link: "https://jonesszn.github.io/oraxol-proj/",
    link2: "https://www.liuguo.net/resource/mb4/3%20_539/html/index.html",
    link3: "https://github.com/JonesSZN/oraxol-proj",
  },
  {
    image: "images/zeepho-logo.png",
    Heading:
      "We understand the importance of protecting what matters most to you. With our comprehensive insurance solutions, we aim to provide you with the peace of mind you deserve.",
    siteimage: "images/zeepho-site-bg.png",
    link: "https://jonesszn.github.io/zeepho-site/",
    link2: "https://zeepho-template.webflow.io/",
    link3: "https://github.com/JonesSZN/zeepho-site",
  },

  {
    image: "images/zona-logo.svg",
    Heading:
      "We seamlessly blend cutting-edge technology, global connectivity, and unmatched expertise to redefine how businesses approach their supply chain challenges.",
    siteimage: "images/zona-site-bg.png",
    link: "https://jonesszn.github.io/zona-proj/",
    link2: "https://zona-template.webflow.io/",
    link3: "https://github.com/JonesSZN/zona-proj",
  },
];

const Grid = ({ projectsToRender }) => {
  return (
    <div className="mb-12 grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-2">
      {CARDS_OBJ.slice(0, projectsToRender).map((card, index) => (
        <GridCard card={card} index={index} />
      ))}
    </div>
  );
};

const GridCard = ({ card, index }) => {
  return (
    <div className="group relative h-[599px] w-[360px] overflow-hidden rounded-2xl bg-[#ECEDEE] pl-8 pt-8 lg:h-[738px] lg:w-full lg:pl-12 lg:pt-12">
      <div className="flex h-full w-full flex-col justify-between">
        {/* top-div */}
        <div>
          <img
            className={`mb-4 h-[50px] w-[160px] object-contain ${
              index === 2 ? "brightness-200" : ""
            }`}
            src={card.image}
            alt=""
          />

          <p className="max-w-[460px] text-[#18px] text-[#687076]">
            {card.Heading}
          </p>
        </div>

        {/* bottom-div */}
        <div className="">
          <div className="flex gap-5 xl:gap-16">
            <button className="group mb-8 flex items-center gap-2 font-bold text-[#003cd6] transition-all duration-200 hover:text-[#11181C]">
              <a
                className="flex items-center justify-center gap-2 text-[14px] xl:text-[16px]"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View <ExternalLink className="" color="black" />
              </a>
            </button>

            <button className="group mb-8 flex items-center gap-2 font-bold text-[#11181C] transition-all duration-200 hover:text-[#003cd6]">
              <a
                className="text-[14px] xl:text-[16px]"
                href={card.link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Original
              </a>

              <ChevronRight className="text-[#003cd6] transition-all duration-200 group-hover:text-[#11181C]" />
            </button>

            <button className="group mb-8 flex items-center gap-2 font-bold text-[#11181C] transition-all duration-200 hover:text-[#003cd6]">
              <a
                className="text-[14px] xl:text-[16px]"
                href={card.link3}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Code
              </a>

              <ChevronRight className="text-[#003cd6] transition-all duration-200 group-hover:text-[#11181C]" />
            </button>
          </div>

          <img
            className="w-full rounded-tl-xl object-cover object-top shadow-sm shadow-black/20 lg:aspect-[1.4]"
            src={card.siteimage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  const [projectsToRender, setProjectsToRender] = useState(4);
  const Heading = () => {
    return (
      <div className="w-full">
        <h1 className="max-w-[400px] text-4xl text-[#11181C] lg:text-5xl">
          A limited showcase of my projects
        </h1>
      </div>
    );
  };

  return (
    <section className="flex w-full justify-center bg-white py-40">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <Heading />
          <Grid projectsToRender={projectsToRender} />

          {/* BUTTON AT BOTTOM */}
          <button
            onClick={() => {
              if (projectsToRender === 4) {
                setProjectsToRender(CARDS_OBJ.length);
              } else {
                setProjectsToRender(4);
              }
            }}
            className="group flex items-center gap-2 rounded-md border border-[#003cd6] border-[] bg-[#003cd6] px-[18px] py-2 text-[14px] font-bold text-white transition-all duration-300 hover:border hover:bg-white hover:text-[#003cd6]"
          >
            View More
            <ChevronRight className="text-white transition-all duration-300 group-hover:text-[#003cd6]" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export { Showcase };
