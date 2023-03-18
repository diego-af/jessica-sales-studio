import "./index.css";
import Image from "../../assets/Image upload-pana.png";
import Perfil from "../../assets/picwish.png";
import { useContext, useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { ButtonMobile } from "../ButtonMobile";
import { DesginerContextState } from "../../context/DesignerContext";

const Header = () => {
  const { togleMenuMobile, setTogleMenuMobile, tabs, setTabs } =
    useContext(DesginerContextState);
  return (
    <div className="header">
      <div className="menu-content">
        <div className="imagem">
          <img
            src="https://www.shutterstock.com/image-vector/logo-bb-belleza-simple-estetica-600w-2129598500.jpg"
            alt="Logo de descrição"
          />
        </div>
        <ul>
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
            {" "}
            Serviços
          </li>
          <li> Sobre</li>
        </ul>

        <ButtonMobile />
      </div>
      <div
        className="header-section"
        style={{ display: tabs === "0" ? "flex" : "none" }}
      >
        <p>Eu sou Jéssica Sales, sua Designer!</p>

        <img src={Perfil} alt="" />
      </div>
    </div>
  );
};

export { Header };
