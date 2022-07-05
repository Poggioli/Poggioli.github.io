import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import globalStyles from "./themes/global-styles";

const App: FC = () => {
  globalStyles();

  return (
    <>
      <Navbar />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
