import { Games } from "../data/games-and-platforms-links";
import TopicCard from "./TopicCard";

function LearningByDoingSection() {
  return (
    <section
      id="htmlSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {Games.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default LearningByDoingSection;
