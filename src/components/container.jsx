import { cn } from "../lib/tw-merge";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn("w-[90%] max-w-[1450px] md:w-[90%] xl:w-[60%]", className)}
    >
      {children}
    </div>
  );
};

export { Container };
