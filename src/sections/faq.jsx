import { Container } from "../components/container";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

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
      heading: "What kind of services do you offer?",
      description:
        "I offer a wide range of services, including web design, web development, graphic design, brand identity, and more.",
    },
    {
      heading: "How do I get started on a project with",
      description:
        "Getting started is easy! Simply reach out to me through my socials or contact form on my website. I'll schedule a consultation to discuss your project goals and outline the next steps.",
    },
    {
      heading: "What is the typical timeline for a project?",
      description:
        "Project timelines depend on the scope and requirements. I work efficiently to deliver quality results, and timelines are discussed during the project consultation.",
    },
    {
      heading: "can you work with my existing branding or design guidelines?",
      description:
        "Absolutely! I can seamlessly integrate your existing branding and design guidelines to maintain a cohesive and consistent look.",
    },
    {
      heading: "How much does your service cost?",
      description:
        "My pricing varies based on project complexity and features. Contact me for a personalized quote tailored to your needs.",
    },
    {
      heading: "Do you offer ongoing maintenance and support?",
      description:
        "Yes, I provide ongoing maintenance and support to ensure your website stays optimized and up-to-date.",
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
    <section className="flex w-full justify-center bg-[#FFFFFF] py-24">
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
