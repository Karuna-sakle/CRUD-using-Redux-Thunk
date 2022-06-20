import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logout_User } from '../redux/actions/userAction';


function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate

  const fetchData = async () => {
    await dispatch(Logout_User)
    localStorage.removeItem('user-info');
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
    await navigate("/login")

  }

  useEffect(() => {
    fetchData()
    window.location.href = "/"
  })

  return (
    <>
      ....
    </>
  )
}
export default Logout;
