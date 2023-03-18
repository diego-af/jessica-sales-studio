import { useContext, useEffect, useState } from "react";
import { DesginerContextState } from "../../context/DesignerContext";
import "./style.css";

const MenuMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { togleMenuMobile, setTogleMenuMobile, setTabs, tabs } =
    useContext(DesginerContextState);

  console.log(togleMenuMobile);

  return (
    <div
      className="content-menu-container "
      style={{ display: togleMenuMobile && width <= 578 ? "grid" : "none" }}
    >
      <ul className="content-menu">
        <li
          onClick={() => {
            setTabs("0");
            setTogleMenuMobile(!togleMenuMobile);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            setTabs("1");
            setTogleMenuMobile(!togleMenuMobile);
          }}
        >
          Serviços
        </li>
        <li>Sobre</li>
      </ul>
    </div>
  );
};

export { MenuMobile };
