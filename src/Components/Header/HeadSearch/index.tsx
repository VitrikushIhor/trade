import { HeaderLanguages } from "./Languages";
import { Search } from "./Search";
import "./style.scss";

export const HeaderSearch = () => {
  return (
    <article className="header-line flex-sb">
      <Search />
      <HeaderLanguages />
    </article>
  );
};
