import "./style.scss";

import { TitleDescriptionProps } from "../../../Types/type";

export const Title = ({ children, className = "" }: TitleDescriptionProps) => {
  return <h1 className={`title ${className}`}>{children}</h1>;
};
