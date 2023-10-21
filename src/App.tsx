import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

import HtmlSection from "./components/HtmlSection";
import CssSection from "./components/CssSection";

function App() {
  // maybe creating a tab with resources that cover
  // general topics and have good tutorials and docs, like:
  // w3schools.com, Kevin Powell, mdn.com,
  // web.dev, digital ocean
  return (
    <>
      <nav className="flex justify-center p-10 py-24">
        <h1 className="break-all text-center text-5xl font-bold text-white">
          My webdev bookmarks/topics collection
        </h1>
      </nav>
      <main className="container mx-auto">
        <Tabs aria-label="Basic tabs" defaultValue={0} variant="plain">
          <TabList
            sx={{
              overflow: "auto",
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
              fontSize: "1.3rem",
            }}
          >
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>General Resources</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>Computer Basics</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>HTML</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>CSS</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>JavaScript</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>Tools</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>Colors & Fonts</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>Games</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>3D-Engines</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>Inspiration</p>
            </Tab>
            <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
              <p>Tutorials & Creators</p>
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <p>General</p>
          </TabPanel>
          <TabPanel value={1}>
            <p>Computer Basics</p>
          </TabPanel>
          <TabPanel value={2}>
            <HtmlSection />
          </TabPanel>
          <TabPanel value={3}>
            <CssSection />
          </TabPanel>
          <TabPanel value={4}>
            <b>Third</b> tab panel
          </TabPanel>
        </Tabs>
      </main>
    </>
  );
}

export default App;
