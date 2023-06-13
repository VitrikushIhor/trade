import { LinkProps } from "../../../../Types/type";
import { RouteConst } from "../../../../assets/RouteConst";
import { Link } from "react-router-dom";

export const LinkItem = ({ name }: LinkProps) => {
  return (
    <li className="menu-item">
      {name}
      <ul>
        <li>
          <Link to={RouteConst.HOME}>Lorem</Link>
        </li>
        <li>
          <Link to={RouteConst.HOME}>Lorem</Link>
        </li>
        <li>
          <Link to={RouteConst.HOME}>Lorem</Link>
        </li>
      </ul>
    </li>
  );
};
