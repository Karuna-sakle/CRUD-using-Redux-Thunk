import { CREATE_POST, DELETE_POST, ERROR, LOGIN_USER, LOGOUT_USER, REGISTER_USER, SHOW_POST, SINGLE_POST_SHOW, UPDATE_POST } from "../actions/actionTypes"

const initial_State = {
    Register_Data : [],
    Login_Data : [],
    Post : [],
    Error : [],
    
}

const user_Reducer = (state=initial_State,action)=>{
    switch(action.type){
        case REGISTER_USER :
            return{
                ...state,
                Register_Data : action.payload,
                Error : []
            }
        case LOGIN_USER:
            return{
                ...state,
                Login_Data:action.payload,
                Error: []
            }

        case CREATE_POST :
            return{
                ...state,
                Post : action.payload,
                Error : []
            }
        
        case SHOW_POST :
            return{
                ...state,
                showPost : action.payload,
                Error : []
            }

        case DELETE_POST :
            return{
                ...state,
                deletePost : action.payload,
                Error : []
            }

        case UPDATE_POST :
            return{
                ...state,
                updatePost : action.payload,
                Error : []
            }
        
        case SINGLE_POST_SHOW :
            return{
                ...state,
                singlePost : action.payload,
                showPost:"",
                Error : []
            }
    
        case ERROR:{
            return {
                ...state,
                Error : action.payload
            }
        }
        case LOGOUT_USER:
            return {
                ...state,
                Login_Data : null
            }

        default:
            return state

    }

}

export default user_Reducer;