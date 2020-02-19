import {SET_STORE_IMAGE,ADD_MORE_IMAGE} from './../actions/actionType';
let initial = {
    listImage:[],
    page:1
}
let StoreImageReducers=(state=initial,action)=>{
    switch (action.type) {
        case SET_STORE_IMAGE :
            // console.log({...state,listImage:action.payload});
            return {...state,listImage:[...action.payload]} ;
        case ADD_MORE_IMAGE :
            // console.log(state.listImage.length);
            let NewList = state.listImage.concat(action.payload);
            return {...state,listImage:[...NewList],page:state.page+1}
        default:
            return state ;
            break;
    }
}
export default StoreImageReducers ;