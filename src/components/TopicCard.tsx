import { Bookmark } from "../data/definitions";
import "../style/index.css";

export default function TopicCard(props: Bookmark) {
  return (
    <div className="p-2">
      <div className="card rounded-xl p-[1px] duration-75 hover:scale-105">
        <a href={props.url} target="_blank">
          <div className="overflow-hidden rounded-xl border border-white/25 bg-black p-3 text-center shadow-lg">
            <div className="break-all">
              <p className="text-lg font-bold">{props.topic}</p>
              <em className="text-sm text-white/50">by {props.by}</em>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
