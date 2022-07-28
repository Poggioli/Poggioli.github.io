import { Box, Container } from "@modulz/design-system";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { globalStyles } from "./globals/style";
import { About } from "./pages/About";
import { Experiences } from "./pages/Experiences";
import { CIandTExperience } from "./pages/Experiences/work/CIandTExperience/CIandT";
import { LoggiExperience } from "./pages/Experiences/work/LoggiExperience/LoggiExperience";
import { Home } from "./pages/Home";

const App: FC = () => {
  globalStyles();
  return (
    <>
      <Header />
      <Box
        css={{
          minHeight: "100vh",
          height: "100%",
          pt: "$8",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/loggi" element={<LoggiExperience />} />
          <Route path="/experiences/ciandt" element={<CIandTExperience />} />
        </Routes>
      </Box>
      <Container
        size="3"
        css={{
          width: "100%",
        }}
      >
        <Footer />
      </Container>
    </>
  );
};

export default App;
