import React from "react";
import "./CheckOut.scss";

const CheckOut = () => {
  return (
    <section>
      <div className="container">
        <div className="box">
          <h1>Оформление заказа</h1>
          <p>
            Главная - <span style={{ color: "gray" }}>Оформление заказа</span>
          </p>
        </div>
        <div className="container__list">
          <div className="info__block">
            <div className="fields__fill__and__comments">
              <div className="buyers__details">
                <p>Данные покупателя</p>
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="E-mail" />
                <input type="number" placeholder="Телефон" />
              </div>
              <div className="recipients__address">
                <p>Адрес получателя</p>
                <input type="text" placeholder="Страна" />
                <input type="email" placeholder="Город" />
                <input type="number" placeholder="Улица" />
                <input type="email" placeholder="Дом" />
                <input type="number" placeholder="Квартира" />
              </div>
              <div className="comments">
                <p>Комментарии</p>
                <input type="text" placeholder="Страна" />
              </div>
            </div>
            <div className="payment__method__and__price">
              <div className="payment__method__and__order">
                <div className="your__order">
                  <p>Ваш заказ</p>
                  <div className="your__order__name__and__price">
                    <section className="order__name">
                      <h4>Товар</h4>
                      <h4>Футболка USA</h4>
                      <h4>Подытог</h4>
                    </section>
                    <section className="order__price">
                      <h4>Всего</h4>
                      <h4>$129</h4>
                      <h4>$129</h4>
                    </section>
                  </div>
                  <div className="result">
                    <h4>Итог</h4>
                    <h4>$129</h4>
                  </div>
                </div>
              </div>
              <div className="payment__method">
                <p>Способы оплаты</p>
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    color: "#000",
                  }}
                >
                  <input type="checkbox" name="" id="inp" />
                  <label htmlFor="inp">Оплата наличными</label>
                </div>
                <button>Разместить заказ</button>
              </div>
            </div>
          </div>
          <div className="box__order"></div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
