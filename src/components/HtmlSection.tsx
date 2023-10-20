import { HTML } from "../data/html-links";

function HtmlSection() {
    return (
        <section id="htmlSection" className="flex flex-col text-center overflow-hidden items-center sm:items-start">
            <div className="flex flex-col w-fit justify-center space-y-4">
                {HTML.map((bookmark) => (
                    <a href={bookmark.url} target="_blank">
                        <div className="text-center p-3 rounded-xl overflow-hidden shadow-lg border-white border hover:translate-x-2 duration-75">
                            <div className="break-all">
                                <p className="font-bold text-lg">{bookmark.topic}</p>
                                <em className="text-sm">
                                    by {bookmark.homepage}
                                </em>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default HtmlSection;
