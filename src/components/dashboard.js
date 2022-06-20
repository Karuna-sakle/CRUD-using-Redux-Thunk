import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ListPost } from './getpost'
import Logout from './logout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { show_posts } from '../redux/actions/userAction'

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  
  const handleLogout = () => {
    navigate("/logout")
  }
  
  useEffect(() => {
    dispatch(show_posts())
  })

  return (
    <>
       <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link"  style={{color:"white"}} to="/post"> Create-Post<span className="sr-only"></span></Link>
            </li>
            
          </ul>
          
        </div>
        <Link className="nav-link" style={{color:"white"}} to="/logout">Logout</Link>
        
      </nav>

    </div>
    <div className='dashboard' >
          <center>
          
      <br />

      <ListPost />
      {/* <p> 
        <button onClick={handleLogout} className="btn btn-dark">Logout</button>
      </p> */}
      

      </center>
    
    </div>
    </>
  )
}
