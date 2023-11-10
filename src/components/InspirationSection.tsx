import { Inspiration } from "../data/inpiration-links";
import "../style/index.css";
import TopicCard from "./TopicCard";

function InspirationSection() {
  return (
    <section
      id="toolsSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {Inspiration.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default InspirationSection;
