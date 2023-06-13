import { SupportObj } from "../../../assets/Data/data";
import { Title } from "../../Helpers/Title";
import "./style.scss";

export const Support = () => {
  return (
    <section className="support">
      <article className="support__content container flex-sb">
        <Title className="support__content-title">{SupportObj.title}</Title>
        <div className="support__content-button">
          <button>{SupportObj.btn}</button>
        </div>
        <div className="support__content-image">
          <img src={SupportObj.image} alt="support" />
        </div>
      </article>
    </section>
  );
};
