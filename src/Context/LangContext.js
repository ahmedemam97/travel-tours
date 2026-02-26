import { createContext, useEffect, useState } from "react";
import En from "../Lang/en.json";
import Fr from "../Lang/fr.json";
import Rus from "../Lang/rus.json";

let LangContext = createContext();

function LangContextProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en",
  );

  // save lang value into local storage
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  function getTranslations() {
    if (language === "en") return En;
    if (language === "fr") return Fr;
    return Rus;
  }

  return (
    <LangContext.Provider
      value={{
        translations: getTranslations(),
        setLanguage,
        language,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export { LangContextProvider, LangContext };
