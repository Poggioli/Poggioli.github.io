import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Line from "./components/line";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Container from "./style";
import globalStyles from "./themes/global-styles";

const App: FC = () => {
  globalStyles();

  return (
    <>
      <Line />
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
