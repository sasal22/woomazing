import React from 'react';
import Line from './img/—.png'
import Delete from './img/Vector 3.png'
import Item from './img/Товар.png'
import './Cart.scss'
import {useSelector,useDispatch} from "react-redux";
import {deleteCart} from "../../store/cartSlice";


const Cart = () => {

const {cart} = useSelector(state=>state.cartSlice)
    const dispatch = useDispatch()

    const remove = (el)=>{
        dispatch(deleteCart(el))
    }

    return (
        <section className='cart'>
            <div className="cart__container container">
                <div className="cart__title">
                <h1>Корзина</h1>
                <p>
                    <span>Главная</span><img src={Line} alt="" /><span>Корзина</span>
                    </p>
                </div>
                <div className="cart__block">
                    <div className="cart__block__titles">
                        <div className='cart__block__left'>
                            <h2>Товар</h2>
                            <h2>Цена</h2>
                        </div>
                        <div className='cart__block__right'>
                            <h2>Количество</h2>
                            <h2>Всего</h2>
                        </div>
                    </div>
                <div className='cart__block__line'></div>


                    {cart.map((el)=>(
                        <div className="cart__block__item">
                            <div className="cart__block__left">
                                <div className='cart__block__item__name'>
                                    <img src={Delete} alt=""  onClick={()=>remove(el)}/>
                                    <div className='cart__block__item__img'>
                                        <img src={el.img} alt="" />
                                        <h2>{el.title}</h2>
                                    </div>
                                </div>
                                <div className="cart__block__item__price">
                                    <h2>{Math.floor(el.price - (el.price /100 * el.sale))} $</h2>
                                </div>
                            </div>

                            <div className='cart__block__right'>
                                <div className="cart__block__item__count">
                                    <h2>{el.count}</h2>
                                </div>
                                <div className="cart__block__item__total">
                                    <h2>{el.count *Math.floor(el.price - (el.price /100 * el.sale))} $</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                <div className="cart__block__coupon">
                    <h2>Введите купон</h2>
                    <input type="text"  placeholder=''/>
                </div>
                <div className="cart__block__total">
                    <h2>Подытог:<span>
                        {cart.reduce((acc,el)=>(
                            acc + +el.price *el.count
                        ),0)}
                    </span></h2>
                    <div>
                    <h2>Итогo:<span>{cart.reduce((acc,el)=>(
                        acc + Math.floor(el.price - (el.price /100 * el.sale)) *el.count
                    ),0)}</span></h2>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Cart;