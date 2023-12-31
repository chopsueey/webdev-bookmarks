import { FrameworksAndLibraries } from "../data/frameworks-links.ts";
import "../style/index.css";
import TopicCard from "./TopicCard.tsx";

function FrameworksAndLibrariesSection() {
  return (
    <section
      id="toolsSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {FrameworksAndLibraries.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default FrameworksAndLibrariesSection;
