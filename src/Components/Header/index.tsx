import "./style.scss";
import {HeaderSearch} from './HeadSearch';
import {HeaderNavBar} from '../Helpers/HeaderNavBar';
import {TradeButtons} from './Buttons';

export const Header = () => {
  return (
    <header className="header">
      <article className="header__container container">
        <HeaderSearch />
      </article>
      <article className="header__content">
        <div className="flex-sb container">
          <HeaderNavBar />
          <TradeButtons />
        </div>
      </article>
    </header>
  );
};
