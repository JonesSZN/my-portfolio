import { Container } from "../components/container";
import { AlignLeft } from "lucide-react";

const UL = () => {
  const LIST = ["Demos", "About Me", "Work", "Blog", "All Pages"];
  return (
    <>
      <AlignLeft color="white" className="cursor-pointer md:hidden lg:hidden" />
      <ul className="hidden flex-row items-center gap-9 lg:flex">
        {LIST.map((item) => (
          <li>
            <a
              className="text-[16px] text-white transition-all duration-300 hover:text-red-600"
              href="/"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <header className="fixed z-[999] flex w-full justify-center bg-[#000000] py-4">
      <Container>
        <nav className="z-50 flex items-center justify-between">
          <p className="cursor-pointer text-[24px] text-white transition-all duration-300 hover:text-red-600">
            Marcus Muller
          </p>
          <UL />
          <a
            className="hidden text-[16px] font-bold text-white transition-all duration-300 hover:text-red-600 lg:block"
            href="/"
          >
            Request a Project
          </a>
        </nav>
      </Container>
    </header>
  );
};

export { Header };
