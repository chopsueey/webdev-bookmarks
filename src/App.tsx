import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

import HtmlSection from "./components/HtmlSection";
import CssSection from "./components/CssSection";
import LearningByDoingSection from "./components/LearningByDoingSection";
import ToolsSection from "./components/ToolsSection";
import ComputerBasicsSection from "./components/ComputerBasicsSection";
import InspirationSection from "./components/InspirationSection";
import GeneralResourcesSection from "./components/GeneralResourcesSection";
import JavascriptSection from "./components/JavascriptSection";
import FrameworksAndLibrariesSection from "./components/Frameworks-and-Libraries";
import UtilityPackagesSection from "./components/UtilityPackagesSection";

function App() {
  // maybe creating a tab with resources that cover
  // general topics and have good tutorials and docs, like:
  // w3schools.com, Kevin Powell, mdn.com,
  // web.dev, digital ocean
  return (
    <>
      <nav className="flex justify-center p-10 md:py-24">
        <h1 className="text-center text-5xl font-bold text-white">
          My webdev bookmarks collection
        </h1>
      </nav>
      <main className="container mx-auto">
        <Tabs aria-label="Basic tabs" defaultValue={0} variant="plain">
          <TabList
            sx={{
              overflow: "auto",
              scrollSnapType: "x mandatory",
              "::-webkit-scrollbar": { height: "10px" },
              "::-webkit-scrollbar-track": {
                backgroundColor: "neutral.700",
                borderRadius: "10px",
              },
              "::-webkit-scrollbar-thumb": {
                background:
                  "linear-gradient(319deg, #bbff99 0%, #ffec99 37%, #ff9999 100%)",
                borderRadius: "10px",
              },
              fontSize: "1.3rem",
              padding: "10px",
              borderRadius: "10px",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                color: "common.white",
                backgroundColor: "neutral.500",
              },
            }}
          >
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>General Resources</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Computer Basics</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>HTML</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>CSS</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Colors & Fonts</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>JavaScript</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Backend</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Tools and Collab</p>
            </Tab>

            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Learning by doing</p>
            </Tab>

            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Inspiration</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Tutorials & Creators</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Frameworks & Libraries</p>
            </Tab>

            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Utility Packages</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Integrations</p>
            </Tab>
            <Tab
              disableIndicator
              sx={{ flex: "none", scrollSnapAlign: "start" }}
            >
              <p>Babylon.js</p>
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <GeneralResourcesSection />
          </TabPanel>
          <TabPanel value={1}>
            <ComputerBasicsSection />
          </TabPanel>
          <TabPanel value={2}>
            <HtmlSection />
          </TabPanel>
          <TabPanel value={3}>
            <CssSection />
          </TabPanel>
          <TabPanel value={4}>
            <b>Colors and Fonts</b>
          </TabPanel>
          <TabPanel value={5}>
            <JavascriptSection />
          </TabPanel>
          <TabPanel value={6}>
            <b>Backend</b>
          </TabPanel>
          <TabPanel value={7}>
            <ToolsSection />
          </TabPanel>
          <TabPanel value={8}>
            <LearningByDoingSection />
          </TabPanel>
          <TabPanel value={9}>
            <InspirationSection />
          </TabPanel>
          <TabPanel value={10}>
            <b>Tutorials and Creators</b>
          </TabPanel>
          <TabPanel value={11}>
            <FrameworksAndLibrariesSection />
          </TabPanel>
          <TabPanel value={12}>
            <UtilityPackagesSection />
          </TabPanel>
          <TabPanel value={13}>
            <b>Integrations</b>
          </TabPanel>
          <TabPanel value={14}>
            <b>Babylon.js</b>
          </TabPanel>
        </Tabs>
      </main>
    </>
  );
}

export default App;
