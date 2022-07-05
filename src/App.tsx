import { FC } from "react";
import Navbar from "./components/navbar";
import NavProvider from "./components/navbar/context";
import globalStyles from "./themes/global-styles";

const App: FC = () => {
  globalStyles();

  return (
    <NavProvider>
      <Navbar />
    </NavProvider>
  );
};

export default App;
