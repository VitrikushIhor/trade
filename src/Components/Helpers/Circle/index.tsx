import { TitleDescriptionProps } from "../../../Types/type";
import "./style.scss";

export const Circle = ({ className = "" }: TitleDescriptionProps) => {
  return <div className={`round ${className}`}></div>;
};

export const CircleDashed = ({ className = "" }: TitleDescriptionProps) => {
  return <div className={`dashed ${className}`}></div>;
};
