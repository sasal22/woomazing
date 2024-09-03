import React from 'react';
import bannerImg from '../../Фото главное.png'


const OneSwiper = () => {
    return (
        <div className="banner__container container">
                <div className="banner__left">
                    <h2>Новые поступления
в этом сезоне</h2>
<p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
<div className="banner__btn">
<button>Открыть магазин</button>
</div>
                </div>
                <div className="banner__right">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
    );
};

export default OneSwiper;