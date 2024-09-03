import React from "react";
import "./about.scss";
import first from "../../image/first.png";
import second from "../../image/second.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutPage">
      <div className="about_conteiner">
        <div className="brand">
          <h1>О бренде</h1>
          <p>
            Главная-<span> О бренде</span>
          </p>
        </div>
        <div className="about_cart">
          <img src={first} alt="" />
          <div className="about_text">
            <p>Идея и женщина</p>
            Womazing была основана в 2010-ом и стала одной из самых успешных
            компаний нашей страны. Как и многие итальянские фирмы, Womazing
            остаётся семейной компанией, хотя ни один из членов семьи не
            является модельером. Мы действуем по успешной формуле, прибегая к
            услугам известных модельеров для создания своих коллекций. Этот
            метод был описан критиком моды Колином Макдауэллом как форма
            дизайнерского со-творчества, характерная для ряда итальянских
            prêt-a-porter компаний.
          </div>
        </div>
        <div className="about_cart">
          <div className="about_text">
            <p>Магия в деталях</p>
            Первый магазин Womazing был открыт в маленьком городке на севере
            страны в 2010-ом году. Первая коллекция состояла из двух пальто и
            костюма, которые были копиями парижских моделей. Несмотря на то, что
            по образованию основательница была адвокатом, ее семья всегда была
            тесно связана с шитьём (прабабушка основательницы шила одежду для
            женщин, а мать основала профессиональную школу кроя и шитья).
            Стремление производить одежду для масс несло в себе большие
            перспективы, особенно в то время, когда высокая мода по-прежнему
            доминировала, а рынка качественного prêt-a-porter попросту не
            существовало.
          </div>
          <img src={second} alt="" />
        </div>
        <button onClick={() => navigate("/shop")}>Перейти в магазин</button>{" "}
      </div>
    </div>
  );
};

export default About;