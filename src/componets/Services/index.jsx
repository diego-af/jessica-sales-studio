import "./index.css";
import eybrow from "../../assets/sobrancelha.png";
import eybrowHenna from "../../assets/sobrancelha-henna.png";
import eybrowM from "../../assets/sobrancelha1.png";
import unhas from "../../assets/unhas.png";
import cilio from "../../assets/cilio.png";
import maquiagem from "../../assets/po-pressionado.png";
import { useContext } from "react";
import { DesginerContextState } from "../../context/DesignerContext";
const Services = () => {
  const { togleMenuMobile, setTogleMenuMobile, tabs, setTabs } =
    useContext(DesginerContextState);
  return (
    <div
      className="container"
      style={{ display: tabs === "1" ? "flex" : "none" }}
    >
      <div className="title-service">
        <h4>Serviços</h4>
      </div>
      <div className="all-cards">
        <div className="card-container">
          <div className="title">
            <span>Designer de Sobrancelha </span>
            <small>(Sem Henna)</small>
          </div>

          <div className="middle">
            <img className="imagem" src={eybrow} alt="icone de sobrancelha" />
          </div>
          <div className="footer">
            <span>
              Preço: <small>30$</small>
            </span>
          </div>
        </div>
        <div className="card-container">
          <div className="title">
            <span>Designer de Sobrancelha </span>
            <small>(Com Henna)</small>
          </div>

          <div className="middle">
            <img
              className="imagem"
              src={eybrowHenna}
              alt="icone de sobrancelha"
            />
          </div>
          <div className="footer">
            <span>
              Preço: <small>40$</small>
            </span>
          </div>
        </div>
        <div className="card-container">
          <div className="title">
            <span>Lash Lift </span>
            <small>(Cilios)</small>
          </div>

          <div className="middle">
            <img
              style={{ marginTop: "20px" }}
              className="imagem"
              src={cilio}
              alt="icone de sobrancelha"
            />
          </div>
          <div className="footer">
            <span>
              Preço: <small>120R$</small>
            </span>
          </div>
        </div>
        <div className="card-container">
          <div className="title">
            <span>Micropigmentação </span>
            <small>(Sobrancelha)</small>
          </div>

          <div className="middle">
            <img
              style={{ marginTop: "20px" }}
              className="imagem"
              src={eybrowM}
              alt="icone de sobrancelha"
            />
          </div>
          <div className="footer">
            <span>
              Preço: <small>450R$</small>
            </span>
          </div>
        </div>
        <div className="card-container">
          <div className="title">
            <span>Nails</span>
            <small>(Manicure e Pedicure)</small>
          </div>

          <div className="middle">
            <img
              style={{ marginTop: "15px" }}
              className="imagem"
              src={unhas}
              alt="icone de sobrancelha"
            />
          </div>
          <div className="footer">
            <span>
              Preço: <small>100$</small>
            </span>
          </div>
        </div>
        <div className="card-container">
          <div className="title">
            <span>Maquiagem</span>
            <small>(Pele)</small>
          </div>

          <div className="middle">
            <img
              style={{ marginTop: "15px" }}
              className="imagem"
              src={maquiagem}
              alt="icone de sobrancelha"
            />
          </div>
          <div className="footer">
            <span>
              Preço: <small>80$</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services };
