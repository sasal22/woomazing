import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import logo from "./img/dress (1) 1.png";
import phone from "./img/Заказ звонка.png";
import phoneHover from "./img/Заказ звонка (hover).png";
import cart from "./img/shopping-bags 1.png";
import { FiUserMinus } from "react-icons/fi";
import { LuUserCheck2 } from "react-icons/lu";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logOut} from "../../store/userSlice";
import {animateScroll} from "react-scroll";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth:true
        })
    };

  const [scrollY, setScrolly] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrolly(window.pageYOffset);
    });
  }, []);

  const [imgPhone, setImgPhone] = useState(true);

  let imgH = document.querySelector(".header__img");
  imgH?.addEventListener("mouseenter", () => {
    setImgPhone(false);
  });
  imgH?.addEventListener("mouseleave", () => {
    setImgPhone(true);
  });




    const {user} = useSelector(state=>state.user)




    





   



    

    return (
        <header className={`${scrollY<10?'header':'header scrolled'}`}>
        <div className="header__container container">
            <div className="header__logo">
              <Link  to={'/'}>
              <img src={logo} alt="" />

              </Link>
                <h3>Womazing</h3>
            </div>
            <ul className="header__lists">
          <li onClick={() =>{
              navigate("/")
              toTop()
          }}>Главная</li>
          <li onClick={()=>{
              navigate('/shop')
              toTop()
          }}>Магазин</li>
          <li onClick={() =>{
              toTop()
              navigate("/about")
          }}>О бренде</li>
          <li onClick={()=>{
              navigate('/contact')
              toTop()
          }}>Контакты</li>
        </ul>
            <div className="header__info">
                <p>  <img className='header__img' src={imgPhone?phone:phoneHover} alt=""/> +7 (495) 823-54-12</p>
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <p>{user?.name}</p>
               
                    <span className='header__user'> {user?
                    <Link to='/register'>
                    <FiUserMinus />
                    </Link>:<LuUserCheck2/>
                    }</span>

                    {user?'':<button onClick={()=>dispatch(logOut)}>выход</button>}

            </div>
          
        </div>
        
        
    </header>
  );
};

export default Header;
