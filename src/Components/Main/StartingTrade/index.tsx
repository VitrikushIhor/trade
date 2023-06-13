import { StartTradeContent } from "./StartTradeContent";
import { StartTradeCards } from "./StartTradeCards";
import "./style.scss";

export const StartingTrade = () => {
  return (
    <section className="trade-start container">
      <StartTradeContent />
      <StartTradeCards />
    </section>
  );
};
