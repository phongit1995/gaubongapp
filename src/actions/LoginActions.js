import {LOGIN_SUCCESS , LOGOUT} from './actionType';

import axios from 'axios';
import {getUser,saveUser,removeUser}from '../commons/cache';
import {NavigationActions , StackActions} from 'react-navigation';
export const login =(username,password)=> async dispatch=>{

    let result = await axios({
        method:'POST',
        url:'https://gaubongapi.herokuapp.com/users/login',
        headers:{
            'Content-Type':'application/json'
        },
        data:{
            username,
            password
        }
    })
    if(result.status==200){
        if(!result.data.error){
            await saveUser(result.data.data);
            dispatch(login_success(result.data.data));
            dispatch(
                StackActions.reset({
                    index:0,
                    actions:[NavigationActions.navigate({routeName:'HomeScreen'})]
                })
            )
        }
    }
}
export const check_login =()=> async(dispatch)=>{
    await removeUser();
    let users = await getUser();
    if(users){
        dispatch(login_success(users));
        dispatch(
            StackActions.reset({
                index:0,
                actions:[NavigationActions.navigate({routeName:'HomeScreen'})]
            })
        )
    }
}
export const logout_action =()=> async dispatch =>{
    
    dispatch(logout_success());
    dispatch(
        StackActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'SingInScreen'})]
        })
    )
    
}
const login_success = (value)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:value
    }
}
const logout_success = ()=>{
    return {
        type:LOGOUT
    }
}