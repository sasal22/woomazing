import React, {useState} from 'react';
import './Register.scss'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {registerUser} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";

const Register = () => {

    const dispatch = useDispatch()
    

    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const registerUsers=(e)=>{
        e.preventDefault()
        let user = {
            name,
            email,
            password
        }
        axios.post('http://localhost:8080/users',user)
            .then(({data})=>dispatch(registerUser(data)))
            .then(({data})=>localStorage.setItem('user',JSON.stringify(data)))



        navigate('/')



    }


    return (
        <div className='register'>



          <div className="register__container container">
              <form onSubmit={(e)=>registerUsers(e)}>
                  <h2>Регистрация</h2>
                  <label htmlFor="name">
                      <input onChange={(e)=>setName(e.target.value)} id='name' type="text" placeholder='name'/>
                  </label>
                  <label htmlFor="email">
                      <input onChange={(e)=>setEmail(e.target.value)} id='email' type="text" placeholder='email'/>
                  </label>
                  <label htmlFor="password">
                      <input onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder='password'/>
                  </label>
                  <button>Register</button>
              </form>
          </div>
        </div>
    );
};

export default Register;