import { TitleDescriptionProps } from "../../../Types/type";
import "./style.scss";

export const Description = ({
  children,
  className = "",
}: TitleDescriptionProps) => {
  return <p className={`description ${className}`}>{children}</p>;
};
