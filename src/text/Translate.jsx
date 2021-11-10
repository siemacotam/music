import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { eng } from "./eng";
import { pl } from "./pl";

const Translate = () => {
  const { language } = useContext(StoreContext);

  const whichLanguage = () => {
    if (language === "pl") {
      return pl;
    } else if (language === "eng") {
      return eng;
    } else {
      return "pl";
    }
  };
  return whichLanguage();
};

export default Translate;
