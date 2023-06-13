import { Button } from "../../Helpers/Buttons";
import "./style.scss";

export const TradeButtons = () => {
  const login = ["Login", "Start trading"];
  return (
    <div className="header-buttons flex-sb">
      <div className="header-buttons__login">
        <button className="header-buttons__button-login" type="submit">
          {login[0]}
        </button>
      </div>
      <Button className="header-buttons__start bg-blue">{login[1]}</Button>
    </div>
  );
};
