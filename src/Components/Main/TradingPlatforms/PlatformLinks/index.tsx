import { Link } from "react-router-dom";
import { RouteConst } from "../../../../assets/RouteConst";
import { PlatformsObj } from "../../../../Types/type";
import { Description } from "../../../Helpers/Description";
import "./style.scss";

export const PlatformLink = ({ text, image }: PlatformsObj) => {
  return (
    <Link to={RouteConst.HOME}>
      <div className="platform">
        <img src={image} alt="Android" />
        <Description className="platform-description">{text}</Description>
      </div>
    </Link>
  );
};
