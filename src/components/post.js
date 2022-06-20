import { useForm } from 'react-hook-form'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { create_post } from '../redux/actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const CreatePost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
 //const error = useSelector(state => state?.userReducer?.Error)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(create_post(data))
  }
  function handleBack(){
    navigate("/dashboard")
  }

  return (
    <>
      <div className='container-post'>
        <button className='back' onClick={handleBack}>Back</button>
        <center>
        <form className='div-post' onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Post</h1>
          <input className='input' type="text" placeholder='Add Title' {...register("title", { required: true })} />
          <p style={{color:"red"}}>{errors.title && "Title is Required"}</p>
          <input className='input' type="text" placeholder='Add Description' {...register("description", { required: true })} />
          <p style={{color:"red"}} >{errors.title && "Description is Required"}</p>
          <input type="submit" className="btn btn-sm btn-success" />
        </form>
        </center>
        <ToastContainer  autoClose={1000} />
      
      </div>

    </>
  )
}
