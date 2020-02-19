import {SET_STORE_IMAGE} from './actionType';
import axios from 'axios';
export const fecth_store_image = ()=>async (dispatch,getState)=>{
    const {JWT} = getState().users ;
    let resultfetch = await axios({
        method:'POST',
        url:'https://gaubongapi.herokuapp.com/storeimages/',
        headers:{
            'Authorization':JWT,
            'Content-Type':'application/json'
        },
        data:{
            page:1
        }
    })
    console.log(resultfetch);
    if(resultfetch.status==200){
        if(!resultfetch.data.error){
            console.log(resultfetch.data.data);
            dispatch(set_image_store(resultfetch.data.data));
        }
    }
}
const set_image_store = (value)=>{
    return {
        type:SET_STORE_IMAGE,
        payload:value
    }
}