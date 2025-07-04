import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MansonryFlashList, { MasonryFlashList } from "@shopify/flash-list";

import { wp, hp, getColumncount } from "../common/common";
import ImageCard from './ImageCard';
const ImageGrid = ({images}) => {
  return (
    <View style={styles.container}>
    <MasonryFlashList
    data={images}
    numColumns={2}
    initialNumToRender={100}
    contentContainerStyle={styles.containerstyle}
    renderItem={({item,index})=><ImageCard item={item}  index={index}/>}
    estimatedItemSize={200}
    />
    </View>
  );
}

export default ImageGrid

const styles = StyleSheet.create({
    container:{
        minHeight:3,
        width:wp(100)
    },
    containerstyle:{
paddingHorizontal:wp(4)
    }
})