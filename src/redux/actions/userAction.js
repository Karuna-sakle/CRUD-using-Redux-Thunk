import { CREATE_POST, DELETE_POST, ERROR, LOGIN_USER, REGISTER_USER, SHOW_POST, SINGLE_POST_SHOW , UPDATE_POST, LOGOUT_USER} from "./actionTypes";
import instance from "../../baseurl/getApi";
import { toast } from 'react-toastify';

export const Register_user = (body) => {
    return (dispatch) => {
        return instance.post('/signup', body)
            .then(response => {
                localStorage.setItem('user-info', JSON.stringify(response.data));
                localStorage.setItem('token', (response.data.token));
                localStorage.setItem('user-id', JSON.stringify(response.data.user.id));
                dispatch({
                    type: REGISTER_USER,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            })
    }
}

export const Login_user = (body) => {

    return (dispatch) => {
        return instance.post('/signin', body)
            .then(response => {
                localStorage.setItem('user-info', JSON.stringify(response.data));
                localStorage.setItem('token', (response.data.token));
                localStorage.setItem('user-id', JSON.stringify(response.data.user.id));
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                })
                toast.success("Login Successfully")
            })

            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.message
                })
            });
    }
}

export const create_post = (data) => {

    const user_id = localStorage.getItem("user-id")
    const body ={
        post :{
            title:data.title,
            description:data.description,
            user_id:user_id
        }
    }
    console.log("data",body)
        return (dispatch)=>{
            return instance.post('/posts', body)
            .then(data=>{
                dispatch({
                    type : CREATE_POST,
                    payload:data
                })
                toast.success("Post Created Successfully")

            })
            .catch(error=>{
               dispatch({
                type:ERROR,
                payload : error.response
               })
               
            })}
           

}


export const show_posts = () => {
    return (dispatch) => {
       
        return instance.get('/posts')
        .then(data => {
            dispatch({
                type:SHOW_POST,
                payload:data
            })
        })
        .catch(error=>{
            dispatch({
                type:ERROR,
                payload:error.response
            })
        })
    }}

export const single_post = (id) => {
    return (dispatch) => {
        return instance.get(`/posts/${id}`)
            .then(data => {
                dispatch({
                    type: SINGLE_POST_SHOW,
                    payload: data
                })
            })

            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    }
}

export const delete_post = (id) => {
    return (dispatch) => {
        return instance.delete(`posts/${id}`)
            .then(data => {
                dispatch({
                    type: DELETE_POST,
                    payload: data
                })
            })

            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    }
}

export const update_post = (id,data) => {
    const user_id = localStorage.getItem('user-id')
    const body = {
        post :{
            title : data.title,
            description : data.description,
            user_id:user_id
        }
    }
    return (dispatch) => {
        return instance.put(`/posts/${id}`, body)
            .then(data => {
                dispatch({
                    type: UPDATE_POST,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.message
                })
            })
    }
}

export const Logout_User = ()=>{
    return {
        type:LOGOUT_USER
    }
}

