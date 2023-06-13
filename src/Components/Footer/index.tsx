import { HeaderNavBar } from "../Helpers/HeaderNavBar";
import { FooterObj } from "../../assets/Data/data";
import { Title } from "../Helpers/Title";
import { Description } from "../Helpers/Description";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="container-head container">
          <article className="container-head__navbar flex-sb mb-5 ">
            <HeaderNavBar />
          </article>
          <article className="container-head__danger">
            <Title className="container-head__danger-title">
              {FooterObj.title}
            </Title>
            <Description className="container-head__danger-description">
              {FooterObj.description}
            </Description>
          </article>
        </section>
        <section className="container-about">
          <article className="container-about__content flex-sb container">
            <Title className="container-about__content-title">
              {FooterObj.subTitle}
            </Title>
            <Description className="container-about__content-title">
              {FooterObj.subDescription}
            </Description>
          </article>
        </section>
      </div>
    </footer>
  );
};
