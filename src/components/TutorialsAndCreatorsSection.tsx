import { TutorialsAndCreators } from "../data/tutorials-and-creators-links";
import "../style/index.css";
import TopicCard from "./TopicCard";

function TutorialsAndCreatorsSection() {
  return (
    <section
      id="toolsSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {TutorialsAndCreators.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default TutorialsAndCreatorsSection;
