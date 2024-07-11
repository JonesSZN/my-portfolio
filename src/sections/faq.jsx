import { Container } from "../components/container";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Dropdown = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between border-b border-neutral-500/40 py-6">
      <div className="flex flex-col gap-4">
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="max-w-[300px] cursor-pointer text-[24px] font-semibold text-[#11181C] lg:max-w-[900px]"
        >
          {text.heading}
        </p>
        <p
          className={`overflow-hidden text-[18px] font-semibold text-[#687066] transition-all !duration-500 ${
            isOpen ? "h-[60px]" : "h-0"
          }`}
        >
          {text.description}
        </p>
      </div>

      {/* plus/minus div */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-0 top-6 size-9"
      >
        {/* plus and minus need to be absolute so they can be in the center while being in the same spot. */}

        <Plus
          className={`absolute left-1/2 top-1/2 shrink-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <Minus
          className={`absolute left-1/2 top-1/2 shrink-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
};

const Questions = () => {
  const QUESTIONS = [
    {
      heading: "What is your background in coding?",
      description:
        "I don't have an official coding background, but i've been actively coding for about a year, primarily working with HTML,CSS,React, and TailwindCSS. During this time, I've completed over 30 projects.",
    },
    {
      heading: "Where are you located?",
      description: "I'm located in Kentucky, United States ",
    },
    {
      heading: "How old are you?",
      description: "I am 20 years old born in 2004, april 16.",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-8 lg:w-[85%]">
      {QUESTIONS.map((text) => (
        <Dropdown text={text} />
      ))}
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="flex w-full justify-center bg-[#FFFFFF] py-24">
      <Container className={"flex flex-col items-center justify-center gap-6"}>
        <h2 className="text-4xl font-semibold text-[11181C] lg:text-center lg:text-5xl">
          Frequently asked questions
        </h2>
        <Questions />
      </Container>
    </section>
  );
};

export { Faq };
