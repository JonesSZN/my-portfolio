import { ChevronRight } from "lucide-react";

const Button = ({ text }) => {
  return (
    <button className="group flex items-center gap-2 rounded-md bg-[#003cd6] px-[18px] py-2 text-[14px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#003cd6]">
      {text}
      <ChevronRight className="text-white transition-all duration-300 group-hover:text-[#003cd6]" />
    </button>
  );
};

export { Button };
