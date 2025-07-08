
import { Image, Pressable, StyleSheet } from 'react-native';
import { getImageSize, wp } from '../common/common';
import { theme } from '../common/theme';

const ImageCard = ({item,index,columns,router}) => {

    const islistindex=()=>{
        return (index+1) % columns === 0;
    }

    const getImageHeight=()=>{
        let{imageheight:height,innerWidth:width}=item;
        return {height:getImageSize(height,width)}
    }

  return (
   <Pressable onPress={()=>router.push({pathname:'home/image', params: {...item}})} 
   style={[styles.imagewrapper , !islistindex() && styles.spacing]}>
    <Image
    style={[styles.image,getImageHeight()]}
    source={{uri: item?.webformatURL}}
    transition={100}
    />
  

   </Pressable>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  image:{
        height:400,
        width:'110%',
        
    },
    imagewrapper:{
        backgroundColor:theme.colors.greyBG,
        borderRadius:18,
        borderCurve:'continuous',
        overflow:'hidden',
        marginBottom:wp(2),
        marginTop:wp(2)
        
    },
    spacing:{
        marginRight:wp(2)
    }
})