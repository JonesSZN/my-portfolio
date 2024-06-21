import { Container } from "../components/container";
import { cn } from "../lib/tw-merge";
import { ArrowDownRight } from "lucide-react";

const Achievements = () => {
  const GRID_OBJ = [
    {
      heading: "Chess",
      description:
        "I have played chess for a year and have a rating of 1400, And have wins over players with over a 1800+ rating.",
    },
    {
      heading: "Guitar",
      description:
        " I've played the guiar for over a year now. I started on electric guiar playing songs like thunderstruck,Enter Sandman and more. Today I play on acoustic playing songs like hotel california, Wake me up and more.",
    },
    {
      heading: "Nunchucks",
      description:
        "I've had nunchucks for over a year now and at first they are annoying after hitting yourself alot, but the reward is satisfying after correctly doing certain tricks.",
    },
    {
      heading: "Games",
      description:
        "I enjoy playing games like Fortnite, COD, Rocketleage in my freetime. In Fortnite and COD I was good enough to go pro, and in RocketLeague I achieved the rank Grand Champion in just a year.",
    },
    {
      heading: "Coding",
      description:
        "I have been coding for a year and have been able to build responsive websites using TailwindCSS, react.",
    },
    {
      heading: "50 states",
      description:
        "I have a personal record of 34 seconds of getting all 50 states right and close to the world record.",
    },
    {
      heading: "Typing",
      description:
        "I have been typing for just 3 years now and have a average of 121WPM and a record of 146WPM.",
    },
    {
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

const AchievementCard = ({ card, className, index }) => {
  return (
    <div
      className={cn(
        "flex h-[260px] flex-col items-center justify-between rounded-2xl bg-[#202C3380] p-7 lg:h-[370px] lg:w-full",
        className,
        {
          "group cursor-pointer bg-[#003CD6] transition-all duration-500 hover:bg-[#202C3380]":
            index === 5,
        },
      )}
    >
      <div className="relative h-full">
        <h2
          className={`text-[20px] text-[#687076] lg:text-[24px] ${
            index === 5 ? "text-white" : ""
          }`}
        >
          {card.heading}
        </h2>
        <ArrowDownRight
          className={`absolute bottom-0 right-2 size-20 text-[20px] text-white transition-all duration-500 group-hover:rotate-180 ${
            index === 5 ? "block" : "hidden"
          }`}
        />
      </div>

      <p className="text-center text-[18px] text-white lg:text-[22px]">
        {card.description}
      </p>
    </div>
  );
};

export { Achievements };
