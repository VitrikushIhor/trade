import Logo from "../../../assets/images/Logo.svg";
import { names } from "../../../assets/Data/data";
import { LinkItem } from "./Link";
import "./style.scss";

export const HeaderNavBar = () => {
  const element = names.map((name, i) => {
    return <LinkItem key={i} name={name} />;
  });

  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header-container__links">
        <ul className="header-container__links-menu">{element}</ul>
      </nav>
    </div>
  );
};
