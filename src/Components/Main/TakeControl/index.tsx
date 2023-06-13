import { TakeControlObj } from "../../../assets/Data/data";
import { ContentElement } from "./ContentList";
import { Description } from "../../Helpers/Description";
import { Title } from "../../Helpers/Title";
import { Circle } from "../../Helpers/Circle";
import { Button } from "../../Helpers/Buttons";
import "./style.scss";

export const TakeControl = () => {
  const element = TakeControlObj.content.map((item, i) => {
    return <ContentElement key={i} title={item.title} />;
  });

  return (
    <section className="take-control flex-sb  container">
      <article className="take-control__images">
        <Circle className="take-control__circle-image" />
        <img
          className="take-control__first-image"
          src={TakeControlObj.firstImage}
          alt="FirstPhone"
        />
        <img
          className="take-control__second-image"
          src={TakeControlObj.secondImage}
          alt="SecondPhone"
        />
      </article>
      <article className="take-control__content">
        <Title>{TakeControlObj.title}</Title>
        <Description className="m-2">{TakeControlObj.description}</Description>
        <div className="take-control__advantages">
          <ul className="take-control__advantages-list">{element}</ul>
        </div>
        <div className="take-control__buttons mt-6">
          <Button className="color-blue take-control__buttons-first">
            {TakeControlObj.btn1}
          </Button>
          <Button className="color-gray take-control__buttons-second">
            {TakeControlObj.btn2}
          </Button>
        </div>
      </article>
    </section>
  );
};
