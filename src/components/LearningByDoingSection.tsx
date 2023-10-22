import { Games } from "../data/games-and-platforms-links";

function LearningByDoingSection() {
  return (
    <section
      id="htmlSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {Games.map((bookmark) => (
          <div className="card p-2">
            <a href={bookmark.url} target="_blank">
              <div className="overflow-hidden rounded-xl border border-white/25 p-3 text-center shadow-lg duration-75 hover:scale-105">
                <div className="break-all">
                  <p className="text-lg font-bold">{bookmark.topic}</p>
                  <em className="text-sm text-white/50">by {bookmark.by}</em>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningByDoingSection;
