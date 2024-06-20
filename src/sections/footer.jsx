import { Container } from "../components/container";

const TopFooter = () => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-0">
      {/* left side */}
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-32">
        <p className="cursor-pointer text-[22px] font-bold text-black">
          Marcus Muller
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
        © 2024 Marcus Muller. All rights reserved. Licensing
      </p>
      <p className="max-w-[190px] text-center lg:max-w-[600px]">
        Template by wCopilot. Powered by Webflow
      </p>
    </div>
  );
};

const UL = () => {
  const UL = ["Home", "About", "Work", "Contact"];
  return (
    <ul className="flex gap-6">
      {UL.map((item) => (
        <li className="text-[16px] text-[#687076]">
          <a
            className="transition-all duration-300 hover:text-[#033ED9]"
            href="/"
          >
            {item}
          </a>
        </li>
      ))}
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
