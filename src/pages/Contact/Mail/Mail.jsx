import React from 'react';
import './Mail.scss'

const Mail = () => {
    return (
        <section className='contactMail'>
            <div className="container">
                <div className="contactMail__address">
                    <div className="contactMail__address__text">
                        <h4>Телефон</h4>
                        <p>+7 (495) 823-54-12</p>
                    </div>
                    <div className="contactMail__address__text">
                        <h4>E-mail</h4>
                        <p>info@sitename.com</p>
                    </div>
                    <div className="contactMail__address__text">
                        <h4>Адрес</h4>
                        <p>г. Москва, 3-я улица Строителей, 25</p>
                    </div>
                </div>
                <div className="contactMail__form">
                    <form action="">
                        <h3>Напишите нам</h3>
                        <label htmlFor="">
                            <input type="text" placeholder='Имя'/>
                        </label>
                        <label htmlFor="">
                            <input type="email" placeholder='E-mail'/>
                        </label>
                        <label htmlFor="">
                            <input type="tel" placeholder='Телефон'/>
                        </label>
                        <label htmlFor="">
                            <input className='message' type="text" placeholder='Сообщение'/>
                        </label>
                        <button>Отправить</button>
                        <div className="success">
                            <p>Сообщение успешно отправлено</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Mail;