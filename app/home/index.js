import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets, } from "react-native-safe-area-context";
import { apicall } from '../../api';
import { hp, wp } from "../../common/common";
import { theme } from "../../common/theme";
import Catagory from '../../components/Catagory';
import ImageGrid from '../../components/ImageGrid';
const index = () => {
    const {top}= useSafeAreaInsets();
    const Paddingtop=top>0? top+10: 30;
    const [search,setSearch]=useState('');
    const [images,setimages]=useState([]);
    const searchinputref=useRef(null);
    const [activecatagory,setActiveCatagory]=useState(null);
    const handlechangecatagory=(cat)=>{
        setActiveCatagory(cat);
    }
useEffect(()=>{
    fetchImage();
},[])
    const fetchImage= async(params={page:1},append=true)=>{
let res=await apicall(params);
if(res.success&& res?.data?.hits)
    {
        if(append)
    setimages([...images,...res.data.hits]);
else{
        setimages([...res.data.hits])
}
}


    }
  return (
    <View style={[styles.container, {Paddingtop}]}>
        <StatusBar style='light'/>
        <View style={styles.header}>
            <Pressable>
                <Text style={styles.title}>
                        UnSplash
                </Text>
            </Pressable>
           <Pressable>
            <FontAwesome6 name='bars-staggered' size={22} color={theme.colors.neutral(0.7)}/>
            </Pressable> 

        </View>

        <ScrollView
        contentContainerStyle={{gap:15}}
        > 
        <View style={styles.searchbar}>
            <View style={styles.searchicon}>
                <Feather name='search' size={24} color={theme.colors.neutral(0.4)}/>
            </View>
            <TextInput
            placeholder='search for photos'
            value={search}
            ref={searchinputref}
            onChangeText={value=>setSearch(value)}
            style={styles.searchphotos}
            />
            {
                search &&(
  <Pressable style={styles.closeIcon}>
                <Ionicons name='close' size={24} color={theme.colors.neutral(0.6)}/>  
            </Pressable>
                )
            }
          

        </View>
        <View style={styles.catagories}>
                <Catagory activecatagory={activecatagory} handlechangecatagory={handlechangecatagory}/>
                <View>
                    {
                        images.length>0 && <ImageGrid images={images} router={router}/>
                    }
                </View>
        </View>

        </ScrollView>
     
    </View>
  )
}

export default index

const styles = StyleSheet.create({

    container:{
     top:45,
     flex:1, 
     gap:15,
    },
    header:{
        marginHorizontal:hp(4),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:hp(4),
    },
    searchbar:{
        marginHorizontal:wp(4),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor:theme.colors.greyBG,
        backgroundColor:theme.colors.white,
        padding:6,
        paddingLeft:10,
        borderRadius:theme.radius.md
    },
    searchicon:{
        padding:8
    },
    searchphotos:{
        flex:1,
       // borderRadius: theme.radius.lg,
        paddingVertical:10,
        fontSize:hp(1.8)
    },
    closeIcon:{
        backgroundColor:theme.colors.greyBG,
        padding:8,
     borderRadius: theme.radius.sm
    }

})