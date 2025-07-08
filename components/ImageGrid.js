import { StyleSheet, View } from 'react-native';

import { MasonryFlashList } from '@shopify/flash-list';
import { getColumncount, wp } from "../common/common";
import ImageCard from './ImageCard';

const ImageGrid = ({images, router}) => {
  const columns=getColumncount();
  return (
    <View style={styles.container}>
    <MasonryFlashList
    data={images}
    numColumns={columns}
    initialNumToRender={100}
    contentContainerStyle={styles.containerstyle}
    renderItem={
      ({item,index})=><ImageCard router={router} item={item} columns={columns}  index={index} 
    />
    }
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