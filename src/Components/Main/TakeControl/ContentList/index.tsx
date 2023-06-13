import { ContactType } from "../../../../Types/type";
import "./style.scss";
export const ContentElement = ({ title }: ContactType) => {
  return <li className="list-item">{title}</li>;
};
