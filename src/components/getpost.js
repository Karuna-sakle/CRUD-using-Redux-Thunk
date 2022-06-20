import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { delete_post, show_posts, single_post } from '../redux/actions/userAction';

export const ListPost = () => {
    const [search , setSearch] = useState("");
    const allPost = useSelector((state) => state?.userReducer?.showPost?.data?.posts)
    const update_success = useSelector((state) => state?.userReducer?.showPost)
    const delete_success = useSelector((state) => state?.userReducer?.deletePost)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(show_posts())
    }, [update_success,delete_success])

    const handleDelete=(id)=>{
        console.log("delete",id)
        dispatch(delete_post(id))
    }

    const handleupdate = (id) =>{
        console.log(id)
       navigate(`/update/${id}`)
    }
    
    const handleClick=(id)=>{
        console.log(76767,id)
        dispatch(single_post(id))
        navigate(`/showpost/${id}`)
    }

    const handleSearch = (e)=>{
       console.log(e.target.value)
       setSearch(e.target.value)
    }
    const handleCreatePost = () => {
        navigate("/post")
      }

      const results = !search ? allPost : allPost?.filter((item) => 
          item.title.toLowerCase().includes(search.toLowerCase())||
          item.description.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div className='dash-div'>     
            {/* <div>
            <button onClick={handleCreatePost} className="create-btn">Createpost</button>
            <input type="text" className='searchbar' onChange={handleSearch} placeholder="Search Posts"/>
            </div> */}
            <br />
            <table className ="table table-bordered">
            <thead> 
                <tr>
                <th scope="col" >Title</th>
                <th scope="col">Description</th>
                <th scope="col">Created Date</th>
                <th scope="col">Updated Date</th>
                <th scope="col" colspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
                </tr>
                </thead>
                <tbody>
            {results?.map((post, index) => {
            return (
                <tr key={index}>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{post.created_at}</td>
                    <td>{post.updated_at}</td>
                    <td><button className="btn btn-info" onClick={()=>handleClick(post.id)}>View</button></td>
                    <td><button style={{color:"black"}} className="btn btn-warning" onClick={()=>handleupdate(post.id)}>Edit</button></td> 
                    <td><button  style={{color:"black"}} className="btn btn-danger" onClick={()=>handleDelete(post.id)}>Delete</button></td>
                </tr>

            ) 
            })}</tbody>
        </table>
        </div>
    )
}
