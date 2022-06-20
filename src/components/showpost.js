import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const ShowPost = () => {
    const post = useSelector(state => state?.userReducer?.singlePost?.data?.post)
    console.log("post",post)
    const navigate = useNavigate();

    useEffect(() => {

    }, [post])

    const handleBack = () => {
        navigate("/dashboard")
    }

    return (
        <div className='container-post'>
             <button onClick={handleBack} className='back'>Back</button>
             <div className='div4'>
                 <center>
            
             <br />
                <h5>Post_Id:&nbsp;&nbsp;{post?.id}</h5>
                <h5>User_Id:&nbsp;&nbsp;{post?.user_id}</h5>
                <h5>Title:&nbsp;&nbsp;{post?.title}</h5>
                <h5>Description:&nbsp;&nbsp;{post?.description}</h5>
                </center>
            </div>
        </div>
    )
}
