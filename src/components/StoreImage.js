import React, { Component } from 'react';
import { View, Text , StyleSheet ,ImageBackground, StatusBar ,Image , TouchableOpacity ,FlatList ,Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {logout_action} from './../actions/LoginActions';
import {fecth_store_image,fetch_more_image} from './../actions/StoreImageAction';
class StoreImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        images:[
            {
                userId:12122,
                userName:'Phong Đình Nguyễn',
                title:'Ảnh Của Phong 1',
                imageuser:'https://gaubong.us/files/users/avatar/108296.png?t=4',
                imagelink:'https://gaubong.us/tool/image-upload/files/anh_1581948830.jpg'
            },
            {
                userId:12523,
                userName:'Phong Đình Nguyễn',
                title:'Ảnh Của Phong 1',
                imageuser:'https://gaubong.us/files/users/avatar/108296.png?t=4',
                imagelink:'https://gaubong.us/tool/image-upload/files/anh_1581948830.jpg'
            },
            {
                userId:12423,
                userName:'Phong Đình Nguyễn',
                title:'Ảnh Của Phong 1',
                imageuser:'https://gaubong.us/files/users/avatar/108296.png?t=4',
                imagelink:'https://gaubong.us/tool/image-upload/files/anh_1581948830.jpg'
            },
            {
                userId:12123,
                userName:'Phong Đình Nguyễn',
                title:'Ảnh Của Phong 1',
                imageuser:'https://gaubong.us/files/users/avatar/108296.png?t=4',
                imagelink:'https://gaubong.us/tool/image-upload/files/anh_1581948830.jpg'
            }
        ]
    };
  }
  renderItem= ()=>{

  }
  componentDidMount(){
      this.props.fetch_init_image();
  }
  render() {
      console.log(this.props.StoreImage.listImage);
      console.log(this.props.image);
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <View style={styles.header}>
            <View style={{height:'100%'}}>
                <ImageBackground source={require('./../assets/header_message.png')}
                resizeMode='stretch'
                style={styles.imgBackGround}
                >
                    <View style={styles.imageBackGround_Container}>
                        <View style={styles.logo}>
                            <Image
                                source={{uri:this.props.users.image}}
                                style={{width:80,height:80,borderRadius:80}}
                            />
                        </View>
                        <View style={styles.user}>
                            <Text numberOfLines={1} style={styles.user_name}>{this.props.users.username}</Text>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.icon}>
                                    <Feather name='image' size={20} color={'white'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.icon}>
                                    <Feather name='camera' size={20} color={'white'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.icon} onPress={()=>{this.props._logout()}}>
                                    <MaterialCommunityIcons name='logout' size={20} color={'white'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
        <View style={styles.footer}>
            <FlatList data={this.props.StoreImage.listImage} keyExtractor={(item,index)=>{return `${index}a`}}
            renderItem={({item})=>{
                if(item){
                    return (
                        <View style={styles.container_image}>
                            <View style={{flexDirection:'row',marginTop:10}}>
                                <Image source={{uri:item.userimage}} style={{width:30,height:30 , borderRadius:30}}></Image>
                                <Text style={styles.name_post}>{item.nameUser?item.nameUser.trim():item.nameUser}</Text>
                            </View>
                            <Text style={styles.post_title}>{item.title}</Text>
                            <TouchableOpacity>
                                <Image source={{uri:item.imageLin}} style={styles.images_post}></Image>
                            </TouchableOpacity>
                    </View>)
                }
               
           }}
           ref={ref => this.flatList = ref}
           onEndReached={()=>this.props.fetch_more_store_image()}
           refreshing={false}
           onRefresh={()=>{this.props.fetch_init_image()}}
             />
            
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state)=>{
    return {
        users:state.users,
        StoreImage:state.StoreImage
    }
}
const mapDispathToProps = dispatch =>{
    return {
        _logout:()=>{
            dispatch(logout_action())
        },
        fetch_init_image:()=>{
            dispatch(fecth_store_image())
        },
        fetch_more_store_image:()=>{
            dispatch(fetch_more_image())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(StoreImage) ;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        height:'25%'
    },
    footer:{
        height:'75%',
        marginTop:20,
        paddingHorizontal:10,
        paddingBottom:10
    },
    imgBackGround:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    imageBackGround_Container:{
        flex:1,
        flexDirection:'row',
        marginTop:'8%'
    },
    logo:{
        flex:1,
        marginLeft:'1%',
        alignItems:'center'
    },
    user:{
        flex:2,
        alignItems:'center'
    },
    user_name:{
        color:'yellow',
        fontWeight:'bold',
        fontSize:16

    },
    action:{
        flexDirection:'row',
        marginTop:5
    },
    icon:{
        marginRight:10
    },
    images_post:{
        marginTop:10,
        width:'100%',
        height:200
    },
    container_image:{
        borderWidth:1 ,
        borderRadius:10,
        padding:10,
        borderColor:'#C0C0C0',
        marginBottom:10
    },
    name_post:{
        color:'#FF00CC',
        fontWeight:'bold',
        fontSize:16,
        marginLeft:20,
        flex:1
    },
    post_title:{
        marginTop:10,
        color:'#00cc00',
        textAlign:'center',
        fontSize:16
    }
})