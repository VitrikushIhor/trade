import { Circle, CircleDashed } from "../../Helpers/Circle";
import { TradersGuideObj } from "../../../assets/Data/data";
import { Description } from "../../Helpers/Description";
import { Title } from "../../Helpers/Title";
import { Button } from "../../Helpers/Buttons";
import "./style.scss";

export const TradersGuide = () => {
  return (
    <section className="traders-guide container">
      <div className="traders-guide__container flex-sb">
        <article className="traders-guide__images-container">
          <img
            className="traders-guide__monitor"
            src={TradersGuideObj.image}
            alt="monitor"
          />
          <CircleDashed className="traders-guide__circle" />
          <Circle className="traders-guide__circle-dashed" />
        </article>
        <article className="traders-guide__content-container">
          <Title className="traders-guide__title">
            {TradersGuideObj.title}
          </Title>
          <Description className="traders-guide__description">
            {TradersGuideObj.description}
          </Description>
          <Button className="traders-guide__button color-blue">
            {TradersGuideObj.btn}
          </Button>
          /
        </article>
      </div>
    </section>
  );
};
