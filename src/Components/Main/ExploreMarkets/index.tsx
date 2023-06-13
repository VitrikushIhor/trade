import { Circle, CircleDashed } from "../../Helpers/Circle";
import { ExploreMarketsObj } from "../../../assets/Data/data";
import { Description } from "../../Helpers/Description";
import { Title } from "../../Helpers/Title";
import { Button } from "../../Helpers/Buttons";
import "./style.scss";

export const ExploreMarkets = () => {
  return (
    <section className="explore container">
      <div className="explore__container">
        <article className="content-container">
          <Title>{ExploreMarketsObj.title}</Title>
          <Description className="m-2">
            {ExploreMarketsObj.description}
          </Description>
          <div className="content-container__advantages">
            <ul className="content-container__advantages-list">
              <li>{ExploreMarketsObj.content.item1}</li>
              <li>{ExploreMarketsObj.content.item2}</li>
            </ul>
          </div>
          <div className="content-container__buttons flex-sb ">
            <Button className="content-container__buttons-first color-blue">
              {ExploreMarketsObj.btn1}
            </Button>
            <Button className="content-container__buttons-second color-gray">
              {ExploreMarketsObj.btn2}
            </Button>
          </div>
        </article>
        <article className="images-container">
          <Circle className="images-container__circle circle" />
          <CircleDashed className="images-container__circle-dashed circle-dashed" />
          <img
            className="images-container__phone"
            src={ExploreMarketsObj.image}
            alt="phone-img"
          />
        </article>
      </div>
    </section>
  );
};
