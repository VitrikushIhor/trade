import { Description } from "../../Helpers/Description";
import { Title } from "../../Helpers/Title";
import { AssociationObj } from "../../../assets/Data/data";
import { AchievementsElement } from "./Achievements";
import "./style.scss";

export const TradeAssociation = () => {
  const element = AssociationObj.links.map((link, i) => {
    return (
      <AchievementsElement
        key={i}
        title={link.title}
        description={link.description}
        subTitle={link.subTitle}
      />
    );
  });

  return (
    <section className="association">
      <div className="association__container">
        <article className="content-container">
          <Title className="content-container__title">
            {AssociationObj.title}
          </Title>
          <Description className="content-container__description">
            {AssociationObj.description}
          </Description>
        </article>
        <article className="achievements-container container">
          <ul className="achievements-container__list flex-sb">{element}</ul>
        </article>
      </div>
    </section>
  );
};
