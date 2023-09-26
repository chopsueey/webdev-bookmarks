import { HTML } from "./data/links";

function App() {
  return (
    <main>
      <div className="flex flex-col">
        <h1 className="font-black text-xl">HTML</h1>
        {HTML.map((bookmark) => (
          <div className="max-w-md bg-gray-400 my-2 text-center">
            <div>
              <a href={bookmark.url}>{bookmark.topic}</a>
            </div>
            <div>
              <a className="text-sm italic" href={bookmark.homepageUrl}>
                by {bookmark.homepage}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
