import { TradingPlatformsObj } from "../../../assets/Data/data";
import { TradeButtons } from "../../Helpers/TradeButtons";
import { PlatformLink } from "./PlatformLinks";
import { Description } from "../../Helpers/Description";
import { Title } from "../../Helpers/Title";
import "./style.scss";

export const TradingPlatforms = () => {
  const element = TradingPlatformsObj.links.map((link, i) => {
    return <PlatformLink key={i} text={link.text} image={link.image} />;
  });

  return (
    <section className="trading-platforms container">
      <article className="trading-platforms__content">
        <Title>{TradingPlatformsObj.title}</Title>
        <Description className="trading-platforms__description">
          {TradingPlatformsObj.description}
        </Description>
      </article>
      <article className="trading-platforms__links">{element}</article>
      <article className="trading-platforms__buttons">
        <TradeButtons />
      </article>
    </section>
  );
};
