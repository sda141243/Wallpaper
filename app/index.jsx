import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { hp, wp } from "../common/common";
import { theme } from "../common/theme";
const index = () => {
  const router=useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contentContainer}>
          <Animated.Text 
          entering={FadeInDown.delay(400).springify()}
          
          style={styles.title}>Unsplash
          </Animated.Text>
          <Animated.Text 
            entering={FadeInDown.delay(600).springify()}
          style={styles.punchline}>Every Pixels Tells a story
          </Animated.Text>
         
           <Animated.View
            entering={FadeInDown.delay(600).springify()}
           >
            <Pressable 
            onPress={()=>router.push('home')}
            style={styles.startButton}>
              <Text style={styles.startText}>Start Exploring</Text>
            </Pressable>
           </Animated.View>
         
        </View>
      </Animated.View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(100),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 30,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeight.bold,
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 2,
    marginBottom: 10,
    fontWeight: theme.fontWeight.medium,
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 16,
    borderCurve: "continuous",
  },

  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.fontWeight.medium,
    letterSpacing: 2,
  },
});
