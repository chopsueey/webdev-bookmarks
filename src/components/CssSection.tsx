import { CSS } from "../data/css-links";

function CssSection() {
  return (
    <section
      id="htmlSection"
      className="flex flex-col items-center overflow-hidden text-center text-white sm:items-start"
    >
      <div className="flex w-fit flex-wrap justify-center">
        {CSS.map((bookmark) => (
          <a href={bookmark.url} target="_blank" className="p-2">
            <div className="overflow-hidden rounded-xl border border-white/25 p-3 text-center shadow-lg duration-75 hover:scale-105">
              <div className="break-all">
                <p className="text-lg font-bold">{bookmark.topic}</p>
                <em className="text-sm text-white/50">by {bookmark.by}</em>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CssSection;
