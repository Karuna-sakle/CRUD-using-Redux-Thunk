import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { single_post, update_post } from '../redux/actions/userAction';

export const UpdatePost = () => {
  const { id } = useParams();
  console.log("id", id)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {register,setValue, handleSubmit, formState:{errors}} = useForm();
  const error = useSelector(state=>state?.userReducer?.Error)
  console.log("error",error)

  const data = useSelector(state => state?.userReducer?.singlePost?.data?.post)
  console.log(888,data)

useEffect(()=>{
  dispatch(single_post(id))
},[id])
 
const onSubmit=(data)=>{
  console.log(45,data)
    dispatch(update_post(id,data))
    
}

const handleBack=()=>{
  navigate("/dashboard")
}

useEffect(()=>{
  setValue('title' , data?.title)
  setValue('description' , data?.description)
},[])

return (
    <div className='container-post'>
      <center>
      <button className='back' onClick={handleBack}>Back</button>
        <form className='div-post' onSubmit={handleSubmit(onSubmit)}>
        <h1>Update Post</h1>
            <input type="text" className='input' {...register("title",{required:true})} />
            <p>{errors.title && "Title is Required"}</p>
            <p></p>
            <input type="text" className='input' {...register("description",{required:true})} />
            <p>{errors.title && "Description is Required"}</p>
            <p></p>
           {/* <input type="submit"  className="btn btn-sm btn-success"/> */}
           <button type="submit" className="btn btn-sm btn-success">Update</button>
        </form>
        </center>
    </div>
  )
}
