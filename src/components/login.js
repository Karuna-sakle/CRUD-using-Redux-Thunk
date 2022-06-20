import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Login_user } from '../redux/actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const user = useSelector(state => state.userReducer?.Login_Data)
  const err = useSelector(state => state)
  const dispatch = useDispatch();
 

  const onSubmit = (data) => {
    let login_data = {user : data}
    console.log("onsbumit", login_data)
    dispatch(Login_user(login_data))

  }

  useEffect(() => {
      if (user && user.length != 0) 
      {
       window.location.href = "/dashboard"
      }

  },[user])

 
  return (
    <div className='div1'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input className='input' type="text" placeholder='Enter Your Email' {...register("email", { required: true })} />
        <p></p>
        {errors.email && <p style={{color:"red"}}>Email is Required</p>}
        <input className='input' type="password" placeholder='Enter Password' {...register("password", { required: true })} />
        {errors.password && <p style={{color:"red"}}>Password is Required</p>}
        <p></p>
        <input type="submit" value="login" className="button" />
      
      </form>
       <ToastContainer autoClose={12000}/>
    </div>
  )
}
