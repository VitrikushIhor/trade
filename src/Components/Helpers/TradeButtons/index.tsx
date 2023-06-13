import { StartTrade } from "../../../assets/Data/data";
import { Button } from "../Buttons";
import { Description } from "../Description";
import "./style.scss";

export const TradeButtons = () => {
  return (
    <article className="buttons flex-sb">
      <Button children={StartTrade.btn1} className="bg-blue buttons-first" />
      <Description className="buttons-description">{"or"}</Description>
      <Button className="color-blue buttons-second">{StartTrade.btn2}</Button>
    </article>
  );
};
