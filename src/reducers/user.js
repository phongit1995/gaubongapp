import {LOGIN_SUCCESS,LOGOUT} from './../actions/actionType';
let initUser= {};
let userReducers = (state=initUser,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS :
            return {...action.payload}
        case LOGOUT:
            return { }
        default:
            return state ;
            break;
    }
}
export default userReducers;