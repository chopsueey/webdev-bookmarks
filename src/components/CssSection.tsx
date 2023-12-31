import { CSS } from "../data/css-links";
import TopicCard from "./TopicCard";

function CssSection() {
  return (
    <section
      id="cssSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {CSS.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default CssSection;
