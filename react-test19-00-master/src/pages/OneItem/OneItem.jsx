import React, {useEffect, useState} from 'react';
import './OneItem.scss'
import Shirt from '../../image/first.png'
import photo1 from '../Shop/image/1.png'
import photo2 from '../Shop/image/2.png'
import axios from "axios";
import {useLocation} from "react-router-dom";


const OneItem = () => {

    const location = useLocation()
    const id = location.pathname.split('/').at(-1)


    const [one,setOne] = useState({})


    useEffect(()=>{
        axios(`http://localhost:8080/clothes/${id}`)
            .then(({data})=>setOne(data))
    },[])
    return (
        <section>
            <div className="oneItem__container container">
                <h1>{one.title}</h1>
                <p>Главная - Свитшоты - <span>{one.title}</span></p>
                <div className="oneItem">
                    <img src={'../'+one.img} alt="" />
                    <div className="oneItem__right">
                        <div className="oneItem__right__prices">
                            <p className='sale'>$311</p>
                            <p className='price'>$450</p>
                        </div>
                        <div className="oneItem__size">
                            <p>Выберите размер</p>
                            <div className="oneItem__size__btn">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XL</button>
                            </div>
                        </div>
                        <div className="oneItem__color">
                            <p>Выберите цвет</p>
                            <div className="oneItem__color__box">
                                <div className="brown"></div>
                                <div className="grey"></div>
                                <div className="purple"></div>
                                <div className="yellow"></div>
                            </div>
                        </div>
                        <div className="oneItem__add">
                            <div className='oneItem__add__count'>1</div>
                            <button>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                <h2>Связанные товары</h2>
                <div className="oneItem__carts">
                        <div className="oneItem__cart">
                            <img src={photo1} alt="" />
                            <h4>Футболка USA</h4>
                            <p><span></span> $129</p>
                        </div>
                        <div className="oneItem__cart">
                            <img src={photo2} alt="" />
                            <h4>Купальник Glow</h4>
                            <p><span></span> $129</p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default OneItem;