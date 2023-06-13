import { TradeWithTrustObj } from "../../../assets/Data/data";
import { TrustContentItem } from "./TrustContent";
import { Title } from "../../Helpers/Title";
import { Button } from "../../Helpers/Buttons";
import bgLock from "../../../assets/images/TradeWitchTrust/bigLock.png";
import bgBank from "../../../assets/images/TradeWitchTrust/bigBank.png";
import bgSafe from "../../../assets/images/TradeWitchTrust/bigSafe.png";
import "./style.scss";

export const TradeWithTrust = () => {
  const element = TradeWithTrustObj.content.map((item, i) => {
    return <TrustContentItem key={i} text={item.text} image={item.image} />;
  });
  return (
    <section className="trade-trust container">
      <article className="trade-trust__content">
        <Title className="trade-trust__title">{TradeWithTrustObj.title}</Title>
        <ul className="trade-trust__quality">{element}</ul>
        <Button className="color-blue trade-trust__button">
          {TradeWithTrustObj.btn1}
        </Button>
        <img className="trade-trust__lock" src={bgLock} alt="lock" />
        <img className="trade-trust__bank" src={bgBank} alt="bank" />
        <img className="trade-trust__safe" src={bgSafe} alt="safe" />
      </article>
    </section>
  );
};
