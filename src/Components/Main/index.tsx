import { StartingTrade } from "./StartingTrade";
import { TradeWithTrust } from "./TradeWithTrust";
import { TradePayment } from "./TradePayment";
import { TakeControl } from "./TakeControl";
import { ExploreMarkets } from "./ExploreMarkets";
import { TradersGuide } from "./TradersGuide";
import { TradeAssociation } from "./TradeAssociation";
import { TradingPlatforms } from "./TradingPlatforms";
import { Support } from "./Support";
import "./style.scss";


export const Main = () => {
  return (
    <main className="main">
      <StartingTrade />
      <TradeWithTrust />
      <TradePayment />
      <TakeControl />
      <ExploreMarkets />
      <TradersGuide />
      <TradeAssociation />
      <TradingPlatforms />
      <Support />
    </main>
  );
};
