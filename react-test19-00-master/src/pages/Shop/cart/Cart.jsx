import React from 'react';
import './cart.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/cartSlice";


const Cart = ({el}) => {

    const dispatch = useDispatch()

    const add = (el)=>{
        dispatch(addToCart(el))
    }



    return (


            <div className="cart">
                <Link to={`/oneitem/${el.id}`}>
                    <img className='imgShop' src={el.img} alt="" />
                </Link>
                <h4>{el.title}</h4>
                <p><span></span> {el.price}</p>
                <button onClick={()=>add({...el,count:1})}>В корзину</button>
                <p className='discounted-price'>
                    <span className='price'>{el.price}</span>
                    {el.price-(el.price/100 * el.sale)}
                </p>
            </div>

        
    );
};

export default Cart;