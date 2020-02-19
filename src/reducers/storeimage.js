import {SET_STORE_IMAGE} from './../actions/actionType';
let initial = {
    listImage:[],
    page:1
}
let StoreImageReducers=(state=initial,action)=>{
    console.log(action);
    switch (action.type) {
        case SET_STORE_IMAGE :
            
            // console.log({...state,listImage:action.payload});
            return {...state,listImage:action.payload} ;
            break ;
        default:
            return state ;
            break;
    }
}
export default StoreImageReducers ;