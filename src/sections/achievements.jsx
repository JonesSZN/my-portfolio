import { Container } from "../components/container";
import { cn } from "../lib/tw-merge";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const AchievementCard = ({ card, className, index }) => {
  return (
    <div
      className={cn(
        "relative flex h-[260px] flex-col justify-between overflow-hidden rounded-2xl bg-[#202C3380] lg:h-[370px] lg:w-full",
        className,
      )}
    >
      <img
        className="absolute z-50 h-full w-full object-cover opacity-45 transition-all duration-300 hover:opacity-100"
        src={card.image}
        alt=""
      />
      <div className="relative h-full">
        <h2 className="relative z-50 p-4 text-[20px] text-white lg:text-[24px]">
          {card.heading}
        </h2>
      </div>

      <p className="z-50 p-3 text-center text-[18px] text-white lg:text-[16px] 2xl:text-[22px]">
        {card.description}
      </p>
    </div>
  );
};

const Achievements = () => {
  const GRID_OBJ = [
    {
      image: "images/chess-bg.jpg",
      heading: "Chess",
      description:
        "I have played chess for a year and have a rating of 1400, And have wins over players with over a 1800+ rating.",
    },
    {
      image: "images/guitar-bg.avif",
      heading: "Guitar",
      description:
        " I've played the guiar for over a year now. I started on electric guiar playing songs like thunderstruck,Enter Sandman and more. Today I play on acoustic playing songs like hotel california, Wake me up and more.",
    },
    {
      image: "images/nunchucks-bg.jpg",
      heading: "Nunchucks",
      description:
        "I've had nunchucks for over a year now and at first they are annoying after hitting yourself alot, but the reward is satisfying after correctly doing certain tricks.",
    },
    {
      image: "images/games-bg.webp",
      heading: "Games",
      description:
        "I enjoy playing games like Fortnite, COD, Rocketleage in my freetime.",
    },
    {
      image: "images/coding-bg.png",
      heading: "Coding",
      description:
        "I have been coding for a year and have been able to build responsive websites using TailwindCSS, react.",
    },
    {
      image: "images/50states-bg.jpg",
      heading: "50 states",
      description:
        "I have a personal record of 34 seconds of getting all 50 states right and close to the world record.",
    },
    {
      image: "images/typing-bg.jpg",
      heading: "Typing",
      description:
        "I have been typing for just 3 years now and have a average of 121WPM and a record of 146WPM.",
    },
    {
      image: "images/language-bg.jpg",
      heading: "Language",
      description: "I know a bit of french after learning it for a little bit.",
    },
  ];
  return (
    <section className="flex w-full justify-center bg-[#11181C] py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-3">
          {GRID_OBJ.map((card, index) =>
            index === 1 ? (
              <AchievementCard
                card={card}
                index={index}
                className={"grid-cols-subgrid lg:col-span-2"}
              />
            ) : (
              <AchievementCard card={card} index={index} />
            ),
          )}
        </div>
      </Container>
    </section>
  );
};

export { Achievements };
