import { PlayLinksImg, PaymentText } from "../../../assets/Data/data";
import { Description } from "../../Helpers/Description";
import { PaymentLink } from "./PaymentLink";
import "./style.scss";

export const TradePayment = () => {
  const element = PlayLinksImg.map((img, i) => {
    return <PaymentLink key={i} img={img} />;
  });

  return (
    <section className="trade-payment">
      <article className="trade-payment__content">
        <ul className="trade-payment__links container">{element}</ul>
      </article>
      <Description className="trade-payment__description">
        {PaymentText}
      </Description>
    </section>
  );
};
