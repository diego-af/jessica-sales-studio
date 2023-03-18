import { createContext, useState } from "react";

export const DesginerContextState = createContext({});

export default function DesignerProvider({ children }) {
  const [togleMenuMobile, setTogleMenuMobile] = useState(false);
  const [tabs, setTabs] = useState("0");
  return (
    <DesginerContextState.Provider
      value={{ togleMenuMobile, setTogleMenuMobile, tabs, setTabs }}
    >
      {children}
    </DesginerContextState.Provider>
  );
}
