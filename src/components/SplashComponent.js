import React, { Component } from 'react';
import { View, Text ,StyleSheet,
    StatusBar ,
    Dimensions ,
    TouchableOpacity
    } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class SplashComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
            <StatusBar barStyle="light-content" ></StatusBar>
            <View style={styles.header}>
                <Animatable.Image  resizeMode="stretch"
                animation="bounceIn"
                source={require('./../assets/yi23.gif')}
                duration={1500}
                style={styles.logo} >

                </Animatable.Image>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig"  >
                <Text style={styles.title}> Connect With Every Body !</Text>
                <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('SingInScreen')}>
                    <View style={styles.button}>
                        <LinearGradient colors={['#5db8fe', '#39cff2']} style={styles.SingIn}>
                            <Text>Get Stated
                            </Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
      </View>
    );
  }
}
const {height} =Dimensions.get('screen');
const height_logo = height *0.7 *0.4 ;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05375a'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        height:height_logo,
        width:height_logo
    },
    title:{
        color:'#05375a',
        fontWeight:'bold',
        fontSize:25
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    SingIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    }
})