import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Line from "./components/line";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Container from "./style";
import globalStyles from "./themes/global-styles";

const App: FC = () => {
  globalStyles();

  // const bla = process;
  // console.log(bla);

  return (
    <>
      <Line />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
