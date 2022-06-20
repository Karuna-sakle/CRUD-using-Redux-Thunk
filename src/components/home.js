import React from 'react'
import { Login } from './login'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='container'>
      {/* <img src="https://wallpapercave.com/w/wp1912953" alt="home-image" /> */}
      <center>
      <h1 style={{color:'orangered', fontSize:"50 px"}}>𝓌𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝓂𝓎 𝓌𝑒𝒷𝓈𝒾𝓉𝑒</h1>
      <Login />
      <br />
      <div>
        <p style={{weight : "40px"}}>
          Create Your Account<Link to={"/signup"}>SignUp</Link></p>
      </div>
      </center>
    </div>
  )
}
