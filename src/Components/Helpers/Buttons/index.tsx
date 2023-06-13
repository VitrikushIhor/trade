import { TitleDescriptionProps } from "../../../Types/type";
import "./style.scss";
export const Button = ({ children, className }: TitleDescriptionProps) => {
  return <button className={`${className}`}>{children}</button>;
};
