import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

import HtmlSection from "./components/HtmlSection";
import CssSection from "./components/CssSection";

function App() {
    return (
        <>
            <nav className="flex justify-center p-10 py-24">
                <h1 className="text-white text-5xl font-bold text-center">
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
                            fontSize: "1.3rem"
                        }}
                    >
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
                            <p>Colors</p>
                        </Tab>
                        <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
                            <p>Games</p>
                        </Tab>
                        <Tab sx={{ flex: "none", scrollSnapAlign: "start" }}>
                            <p>3D-Engines</p>
                        </Tab>
                    </TabList>
                    <TabPanel value={0}>
                        <HtmlSection />
                    </TabPanel>
                    <TabPanel value={1}>
                        <CssSection />
                    </TabPanel>
                    <TabPanel value={2}>
                        <b>Third</b> tab panel
                    </TabPanel>
                </Tabs>
            </main>
        </>
    );
}

export default App;
