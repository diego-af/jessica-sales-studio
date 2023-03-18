import { useContext, useState } from "react";

import "./App.css";
import { ButtonWhatssap } from "./componets/ButtonWhatssap";
import { Header } from "./componets/Header";
import { MenuMobile } from "./componets/MenuMobile";
import { Services } from "./componets/Services";
import DesignerProvider from "./context/DesignerContext";

function App() {
  return (
    <DesignerProvider>
      <div className="App">
        <Header />
        <Services />
        <ButtonWhatssap />
        <MenuMobile />
      </div>
    </DesignerProvider>
  );
}

export default App;
