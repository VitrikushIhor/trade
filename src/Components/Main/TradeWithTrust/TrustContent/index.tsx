import { TrustContentType } from "../../../../Types/type";
import { Description } from "../../../Helpers/Description";
import "./style.scss";

export const TrustContentItem = ({ image, text }: TrustContentType) => {
  return (
    <li>
      <img src={image} alt={text} />
      <span className="line"></span>
      <Description>{text}</Description>
    </li>
  );
};
