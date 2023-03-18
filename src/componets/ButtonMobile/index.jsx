import { useContext } from "react";
import { FaAlignJustify, FaXRay } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { DesginerContextState } from "../../context/DesignerContext";
import "./style.css";

const ButtonMobile = () => {
  const { togleMenuMobile, setTogleMenuMobile } =
    useContext(DesginerContextState);

  console.log(togleMenuMobile);
  return (
    <label for="burger" className="burger">
      {togleMenuMobile ? (
        <BsX size={34} onClick={() => setTogleMenuMobile(!togleMenuMobile)} />
      ) : (
        <FaAlignJustify
          size={34}
          onClick={() => setTogleMenuMobile(!togleMenuMobile)}
        />
      )}
    </label>
  );
};

export { ButtonMobile };
