import { UtilityPackages } from "../data/utility-packages-links";
import "../style/index.css";
import TopicCard from "./TopicCard";

function UtilityPackagesSection() {
  return (
    <section
      id="toolsSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {UtilityPackages.map((bookmark) => (
          <TopicCard {...bookmark} />
        ))}
      </div>
    </section>
  );
}

export default UtilityPackagesSection;
