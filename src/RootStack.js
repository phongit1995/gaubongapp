import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import SplashScreen from './components/SplashComponent';
import SingInScreen from './components/SingInComponent';
import StoreImage from './components/StoreImage';
import MyInfoScreen from './components/MyInfoComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
const TabNavigation = createMaterialBottomTabNavigator({
    StoreImage:{
        screen:StoreImage,
        navigationOptions:{
            tabBarLabel:'Kho Ảnh',
            tabBarIcon:({tintColor,focused})=>{
                if(focused){
                    return <FontAwesome name='image' color={tintColor}/>
                }else{
                    return <FontAwesome name='image' color={tintColor}/>
                }
            }
        }
    },
    MyInfoScreen:{
        screen:MyInfoScreen,
        navigationOptions:{
            tabBarLabel:'Thông Tin',
            tabBarOptions:{
                activeTintColor: '#e91e63',
                style: {
                    backgroundColor: 'white',
                    height:50,
                }
            },
            tabBarIcon:({tintColor,focused})=>{
                if(focused){
                    return <AntDesign name='contacts' color={tintColor}/>
                }else{
                    return <AntDesign name='contacts' color={tintColor}/>
                }
            },
            tabBarColor:'white'
        }
    }
},{
    initialRouteName:'StoreImage',
    activeColor:'green',
    inactiveColor:'gray',
    barStyle:{
        backgroundColor:'white'
    }
})
const StackNavigation = createStackNavigator({
    SplashScreen:{
        screen:SplashScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    SingInScreen:{
        screen:SingInScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    HomeScreen:{
        screen:TabNavigation,
        navigationOptions:{
            headerShown:false
        }
    }
  
},{
    initialRouteName:'HomeScreen'
})
export default createAppContainer(StackNavigation) ;