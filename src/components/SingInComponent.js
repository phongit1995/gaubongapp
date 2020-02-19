import React, { Component } from 'react';
import { View, Text ,StyleSheet , TextInput ,TouchableOpacity} from 'react-native';
import FontAnwsome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {login,check_login} from './../actions/LoginActions';
class SingInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        check_textInputChange:false,
        showPassWord:false,
        username:'',
        password:''
    };
  }
  _textInputChange=(text)=>{
        if(text.length>0){
            this.setState({
                check_textInputChange:true,
                username:text
            })
        }else{
            this.setState({
                check_textInputChange:false,
                username:text 
            })
        }
  }
  ShowPassword=()=>{
    this.setState({
        showPassWord:!this.state.showPassWord
    })
  }
  loginAction =()=>{
      this.props._login(this.state.username,this.state.password);
  }
  componentDidMount(){
      this.props._check_login();
  }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>WelCom To GauBong !</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>E-MAIL</Text>
                <View style={styles.action}>
                    <FontAnwsome name={'user-o'} color='#05375a' size={20}/>
                    <TextInput placeholder="Tên Đăng Nhập" 
                        style={styles.TextInput}
                        onChangeText={this._textInputChange}
                    />
                    {
                        this.state.check_textInputChange?<Feather name='check-circle' size={20} color='green'/>:null
                    }
                    
                </View>
                <Text style={[styles.text_footer,{marginTop:20}]}>PASSWORD</Text>
                <View style={styles.action}>
                    <Feather name='lock' size={20} color='#05375a'/>  
                    <TextInput placeholder="Mật Khẩu..." 
                        style={styles.TextInput}
                        secureTextEntry={!this.state.showPassWord}
                        onChangeText={(text)=>this.setState({password:text})}
                    /> 
                    {
                        this.state.showPassWord?<Feather name='eye' size={20} color='gray' onPress={this.ShowPassword}/>:<Feather name='eye-off' size={20} color='gray' onPress={this.ShowPassword}/>
                    }
                </View>
                <TouchableOpacity onPress={this.loginAction}>
                    <LinearGradient  style={styles.signInButton}  colors={['#5db8fe', '#39cff2']}>
                        <Text style={styles.textSignIn}>
                        
                            Sign In
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
               
                
            </View>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        _login:(username,password)=>{
            dispatch(login(username,password))
        },
        _check_login:()=>{
            dispatch(check_login())
        }

    }
}
export default connect(null,mapDispatchToProps)(SingInComponent);
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05375a'
    },
    header:{
        flex:1,
        paddingHorizontal:30,
        justifyContent:'center'
    },
    footer:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        paddingVertical:30
    },
    text_header:{
        color:'white',
        fontWeight:'bold',
        fontSize:25
    },
    text_footer:{
        color:'#05375a',
        fontWeight:'bold'
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
        justifyContent:'center'
    },
    TextInput:{
        flex:1,
        marginLeft:10,
        padding:0,
        color:'#05375a'
    },
    signInButton:{
        marginTop:30,
        justifyContent:'center' ,
        alignItems:'center',
        paddingVertical:15,
        borderRadius:10
    },
    textSignIn:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})