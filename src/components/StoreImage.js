import React, { Component } from 'react';
import { View, Text , StyleSheet ,ImageBackground, StatusBar ,Image , TouchableOpacity ,FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
export default class StoreImage extends Component {
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
  render() {
      console.log(this.state.images);
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
                                source={require('./../assets/avatar_default.png')}
                                style={{width:80,height:80}}
                            />
                        </View>
                        <View style={styles.user}>
                            <Text numberOfLines={1} style={styles.user_name}>Nguyễn Đình Phong</Text>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.icon}>
                                    <Feather name='image' size={20} color={'white'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.icon}>
                                    <Feather name='camera' size={20} color={'white'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.icon}>
                                    <MaterialCommunityIcons name='logout' size={20} color={'white'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
        <View style={styles.footer}>
        
            <FlatList data={this.state.images} keyExtractor={(item,index)=>{return `${index}a`}}
           renderItem={({item})=>{
               return (
                <View style={styles.container_image}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Image source={{uri:item.imageuser}} style={{width:30,height:30 , borderRadius:30}}></Image>
                        <Text style={styles.name_post}>{item.userName}</Text>
                    </View>
                    <Text style={styles.post_title}>{item.title}</Text>
                    <TouchableOpacity>
                        <Image source={{uri:item.imagelink}} style={styles.images_post}></Image>
                    </TouchableOpacity>
            </View> 
               )
           }}
            />
            
        </View>
      </View>
    );
  }
}
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
        marginLeft:10
    },
    post_title:{
        marginTop:10,
        color:'#00cc00',
        textAlign:'center',
        fontSize:16
    }
})