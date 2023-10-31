import { HTML } from "../data/html-links";
import TopicCard from "./TopicCard";

function HtmlSection() {
  return (
    <section
      id="htmlSection"
      className="absolute flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {HTML.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default HtmlSection;
