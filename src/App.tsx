import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/experiences" element={<Experiences />} /> */}
      {/* <Route path="/experiences/loggi" element={<LoggiExperience />} /> */}
      {/* <Route path="/experiences/ciandt" element={<CIandTExperience />} /> */}
    </Routes>
  );
};

export default App;
