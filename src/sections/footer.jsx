import { Container } from "../components/container";
import { motion } from "framer-motion";

const TopFooter = () => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-0">
      {/* left side */}
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-32">
        <p className="cursor-pointer text-[22px] font-bold text-black">
          Parker Jones
        </p>
        <UL />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex cursor-pointer items-center gap-4">
        <a href="https://github.com/JonesSZN">
          <img
            className="rounded-full transition-all duration-300 hover:bg-gray-200"
            src="images/github-icon.svg"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/parker-jones-a2a09b315/">
          <img
            className="rounded-full transition-all duration-300 hover:bg-gray-200"
            src="images/linkedin-icon.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

const BottomFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-1 text-[18px] text-[#687076] lg:flex-row lg:gap-0">
      <p className="text-center">
        © 2024 Parker Jones. All rights reserved. Licensing
      </p>
      <p className="max-w-[250px] text-center lg:max-w-[600px]">
        Developed by Parker Jones
      </p>
    </div>
  );
};

const UL = () => {
  return (
    <ul className="flex gap-6">
      <li className="flex cursor-pointer gap-6 text-[16px] text-[#687076]">
        <p
          onClick={() => {
            const element = document.getElementById("showcase");

            element.scrollIntoView();
          }}
          className="text-[16px] text-[#687076]"
        >
          Work
        </p>

        <p
          onClick={() => {
            const element = document.getElementById("achievement");

            element.scrollIntoView();
          }}
          className="text-[16px] text-[#687076]"
        >
          About Me
        </p>

        <p
          onClick={() => {
            const element = document.getElementById("faq");

            element.scrollIntoView();
          }}
          className="text-[16px] text-[#687076]"
        >
          Faq
        </p>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <section className="flex w-full justify-center bg-white py-8">
      <Container>
        <footer className="flex flex-col gap-8 lg:gap-12">
          <TopFooter />
          <BottomFooter />
        </footer>
      </Container>
    </section>
  );
};

export { Footer };
