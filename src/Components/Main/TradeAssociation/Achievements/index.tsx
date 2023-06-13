import { AssociationLinkType } from "../../../../Types/type";
import { Description } from "../../../Helpers/Description";
import { Title } from "../../../Helpers/Title";
import "./style.scss";
export const AchievementsElement = ({
  title,
  description,
  subTitle,
}: AssociationLinkType) => {
  return (
    <li className="association-block">
      <Title className="association-title">{title}</Title>
      <Description className="association-description">
        {description}
      </Description>
      <span className="association-subTitle">{subTitle}</span>
    </li>
  );
};
