import AsyncStorage  from '@react-native-community/async-storage';
export const saveUser = async (token)=>{
    try {
        await AsyncStorage.setItem('User',JSON.stringify( token));
    } catch (error) {
        
    }
   
}
export const getUser = async()=>{
    try {
        let user = await AsyncStorage.getItem('User');
        if(user){
            return JSON.parse(user);
        }
    } catch (error) {
        return false ;
    }
}
export const removeUser = async ()=>{
    try {
        await AsyncStorage.removeItem('User');
    } catch (error) {
        
    }
}