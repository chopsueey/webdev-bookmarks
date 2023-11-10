import { Javascript } from "../data/javascript-links";
import "../style/index.css";
import TopicCard from "./TopicCard";

function JavascriptSection() {
  return (
    <section
      id="toolsSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {Javascript.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default JavascriptSection;
