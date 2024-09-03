import React from 'react';
import './newCollection.scss'
import {  useSelector } from 'react-redux';

const NewCollection = () => {
    const {data} = useSelector(state=>state.clothesSlice)
    


    return (
        <section className='newCollection'>
            <div className="newCollection__container container">
                <h2>Новая коллекция</h2>
                
                
                <div className="newCollection__cards">
                    {data.map((el)=>(
                            <div key ={el.id} className="newCollection__card">
                                <img src={el.img} alt="" />
                                <h3>{el.title}</h3>
                                <div className="newCollection__price">
                                <p>{el.price}</p>
                                    <p>{el.price-(el.price/100 * el.sale)}</p>
                                </div>
                            </div>
                    ))}
                </div>
                <button>Открыть магазин</button>
            </div>

        </section>
        
    );
};

export default NewCollection;