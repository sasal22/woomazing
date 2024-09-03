import React from 'react';
import "./Footer.scss";
import social from "./img/Социалки.png";
import visa from "./img/visa.png";
import vector from "./img/Vector.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__container-first">
                    <div>
                        <img src={vector} alt="" />
                        <h3>WOMAZING</h3>
                    </div>
                    <div id='span'>
                        <span>© Все права защищены</span>
                        <span>Политика конфиденциальности</span>
                        <span>Публичная оферта</span>
                    </div>
                </div>
                <div className="footer__container-second">
                    <div className='footer__container-second__ul'>
                        <ul>
                            <li>Главная</li>
                            <li>Магазин</li>
                            <li>О бренде</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className='footer__container-second__span'>
                        <span>Пальто</span>
                        <span>Свитшоты</span>
                        <span>Кардиганы</span>
                        <span>Толстовки</span>
                    </div>
                </div>
                <div className="footer__container-third">
                    <div>
                    <span>+7 (495) 823-54-12</span>
                    <span>hello@womazing.com</span>
                    </div>
                    <img id='img1' src={social} alt="image" />
                    <img id='img2' src={visa} alt="image" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;