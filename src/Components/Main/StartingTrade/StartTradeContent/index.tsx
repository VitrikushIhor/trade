import { StartTrade } from "../../../../assets/Data/data";
import { Description } from "../../../Helpers/Description";
import { TradeButtons } from "../../../Helpers/TradeButtons";
import { Title } from "../../../Helpers/Title";
import "./style.scss";

export const StartTradeContent = () => {
  return (
    <section className="trade-content">
      <article className="trade-content__container">
        <Title className="trade-content__title">{StartTrade.title}</Title>
        <Description className="trade-content__description">
          {StartTrade.description}
        </Description>
      </article>
      <TradeButtons />
    </section>
  );
};
