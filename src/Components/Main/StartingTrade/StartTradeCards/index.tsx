import Laptop from "../../../../assets/images/laptop.png";
import Ellipse from "../../../../assets/images/Ellipse.png";
import laptopBlur from "../../../../assets/images/laptopBlur.png";
import "./style.scss";

export const StartTradeCards = () => {
  return (
    <article className="trade-cards">
      <img className="trade-cards__first" src={Laptop} alt="laptop" />
      <img className="trade-cards__second" src={laptopBlur} alt="blur-laptop" />
      <img className="trade-cards__third" src={Ellipse} alt="circle" />
    </article>
  );
};
