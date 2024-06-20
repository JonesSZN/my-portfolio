import { Container } from "../components/container";
import { cn } from "../lib/tw-merge";

const Achievements = () => {
  const GRID_OBJ = [
    {
      heading: "Active users on marketplaces i've created",
      description: "1M",
    },
    {
      heading: "My clients raised owning to my design work",
      description: "$500M",
    },
    {
      heading: "People on board",
      description: "1",
    },
    {
      heading: "Myy years experience",
      description: "8",
    },
    {
      heading: "Succesfully finished projects",
      description: "34",
    },
    {
      heading: "Let's work together",
      description: "",
    },
    {
      heading: "Design awards",
      description: "18+",
    },
    {
      heading: "Monthly visit on E-Commerce I designed",
      description: "13M",
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
        "flex h-[260px] flex-col justify-between rounded-2xl bg-[#202C3380] p-7 lg:h-[370px] lg:w-full",
        className,
        {
          "bg-[#003CD6]": index === 5,
        },
      )}
    >
      <h2
        className={`text-[20px] text-[#687076] ${
          index === 5 ? "text-white" : ""
        }`}
      >
        {card.heading}
      </h2>
      <p className="text-[90px] text-white">{card.description}</p>
    </div>
  );
};

export { Achievements };
