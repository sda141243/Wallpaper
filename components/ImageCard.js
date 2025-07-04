import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImageSize,wp,hp } from '../common/common';
import { theme } from '../common/theme';


const ImageCard = ({item,index}) => {

    const getImageHeight=()=>{
        let{imageheight:height,innerWidth:width}=item;
        return {height:getImageSize(height,width)}
    }

  return (
   <Pressable style={styles.imagewrapper}>
    <Image
    style={[styles.image,getImageHeight()]}
    source={{uri: item?.webformatURL}}
    />
  

   </Pressable>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  image:{
        height:300,
        width:'100%',
        gap:20
    },
    imagewrapper:{
        backgroundColor:theme.colors.greyBG,
        borderRadius:24,
        overflow:'hidden',
        marginBottom:wp(2),
        margin:10
    }
})