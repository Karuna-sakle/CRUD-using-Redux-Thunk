import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Register_user } from '../redux/actions/userAction';
export const Register = () => {
  
  const {register, handleSubmit, formState:{errors}} =useForm();
  const error = useSelector(state=>state.userReducer.Error)

  const dispatch = useDispatch();


  const onSubmit=(data)=>{
      let user_data = {user : data}
    dispatch(Register_user(user_data))
  }
  
  useEffect(()=>{
    const user  = JSON.parse(localStorage.getItem("user-info"))
    if (user && user.length != 0){
      window.location.href = "/dashboard"
    }
  })

  return (
  
    <div className='reg-container'>
      <center>
      <div className='div2'>
       
        <h2>Signup..</h2>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className='input' placeholder='Enter Your Email' {...register("email", {required:true})} />
          <br />
          {errors.email && <p style={{color:"red"}}>Email is required</p>}
          <p></p>
          <p></p>
          <input type="password" className='input' placeholder='Enter Your password' {...register("password", {required:true})}  />
          {errors.password && <p style={{color:"red"}}> Password is required</p>}
          <p></p>
          <p></p>
          <input className='input' type="password" placeholder='Enter Your ConfirmPwd' {...register("confirmPassword", {required:true})}/>
          {errors.confirmPassword && <p style={{color:"red"}}>ConfirmPassword is Required</p>}
          <p></p>
          <p></p>
          <button type='login' className="btn btn-sm btn-success">SignUp</button>
        </form>
       
        </div>
        </center>
    </div>
  )
}
