import search from "../../../../assets/images/search.svg";
import "./style.scss";

export const Search = () => {
  return (
    <div className="header-search">
      <button className="header-search__button">
        <img className="search-icon" src={search} alt="search-icon" />
      </button>
      <input
        className="header-search__input"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};
