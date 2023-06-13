import { Link } from "react-router-dom";
import { RouteConst } from "../../../../assets/RouteConst";
import { PaymentLinkType } from "../../../../Types/type";

export const PaymentLink = ({ img }: PaymentLinkType) => {
  return (
    <Link to={RouteConst.HOME}>
      <li>
        <img src={img} alt="imageBank" />
      </li>
    </Link>
  );
};
