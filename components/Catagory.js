import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
import { hp, wp } from "../common/common";
import { data } from "../common/data";
import { theme } from "../common/theme";

const Catagory = ({activecatagory ,handlechangecatagory}) => {

  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistcontainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CatagoryItem 
        isActive={activecatagory==item}
         handlechangecatagory={handlechangecatagory}
        title={item} index={index} />
  )}
    />
  );
};

const CatagoryItem = ({ title, index,isActive,handlechangecatagory }) => {
  let color=isActive? theme.colors.white: theme.colors.neutral(0.8);
  let backgroundColor=isActive? theme.colors.neutral(0.8): theme.colors.white
  return (
    <Animated.View entering={FadeInRight.delay(index*200).duration(1000).springify().damping(14)}>
      <Pressable 
      onPress={()=>handlechangecatagory(isActive?null:title)}
      style={[styles.category,{backgroundColor}]}>
        <Text style={[styles.title,{color}]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Catagory;

const styles = StyleSheet.create({

  flatlistcontainer:{
    paddingHorizontal:wp(4),
    gap:8,
  },
  category:{
    padding:12,paddingHorizontal:15,
    borderWidth:1,
    borderColor:theme.colors.greyBG,
    borderRadius:18,
    borderCurve:'continuous',
  },
  title:{
    fontSize:hp(1.8),
    fontWeight:theme.fontWeight.medium,
  }

});
