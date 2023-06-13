import { useState } from "react";
import { languages } from "../../../../assets/Data/data";
import "./style.scss";

export const HeaderLanguages = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("Eng");
  return (
    <div className="header-line__languages">
      <div
        className={`languages-btn 
        ${select === "Eng" ? "Eng" : "Ua"}
        ${isOpen && "arrow"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {select}
      </div>
      {isOpen && (
        <div className="languages-content">
          {languages.map((language, i) => (
            <div
              key={i}
              className="languages-item"
              onClick={() => {
                setSelect(language);
                setIsOpen(false);
              }}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
