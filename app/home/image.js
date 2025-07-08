import { Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import * as FileSystem from "expo-file-system";
import { Image } from "expo-image";
import * as MediaLibrary from "expo-media-library";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Platform, Pressable, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { hp, wp } from "../../common/common";

const image = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [status, setStatus] = useState("");
  console.log("image:", item);
  let uri = item?.webformatURL;
  console.log(uri);
  const fileName = item?.previewURL?.split("/").pop();
  const imageUrl = uri;

  const filePath = `${FileSystem.documentDirectory}${fileName}`;
  const [statusResponse, requestPermission] = MediaLibrary.usePermissions();

useEffect(() => {
  if (!statusResponse?.granted) {
    requestPermission();
  }
}, []);

// gallery image
const DownloadImage = async () => {
  setStatus("downloading");
  let uri = await downloadfile();
  if (uri) {
    console.log("Image downloaded:", uri);
    try {
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
      Alert.alert("Success", "Image saved to gallery!");
    } catch (err) {
      console.log("Save error:", err);
      Alert.alert("Error", err.message);
    }
  }
  setStatus("");
};


  const getSize = () => {
    const aspectRatio = item?.imageWidth / item?.imageHeight;
    const maxWidth = Platform.OS == "web" ? wp(89) : wp(92);
    let calculateHeight = maxWidth / aspectRatio;
    let calculatewidth = maxWidth;
    if (aspectRatio < 1) {
      calculatewidth = calculateHeight + aspectRatio;
    }
    return {
      width: calculatewidth,
      height: calculateHeight,
    };
  };

  const onload = () => {
    setStatus("");
  };

  const handleDownloadImage = async () => {
    setStatus("downloading");
    let uri = await downloadfile();
    if (uri) console.log("image downloaded");
  };
  const downloadfile = async () => {
    try {
      const { uri } = await FileSystem.downloadAsync(imageUrl, filePath);
      console.log("download", uri);
      return uri;
    } catch (err) {
      console.log(err.message);
      Alert.alert("alert", err.message);
      return null;
    }
  };

  return (
    <BlurView style={styles.container} tint="dark" intensity={60}>
      <View style={getSize()}>
        <View style={styles.loading}>
                {/* {
                    status='loading' && <ActivityIndicator size='large' color='white'/>
                } */}
          </View>

        <Image
          transition={100}
          style={[styles.image, getSize()]}
          source={uri}
          onLoad={onload}
        />
      </View>

      <View style={styles.buttons}>
        <Animated.View entering={FadeInDown.springify()}>
          <Pressable style={styles.button} onPress={() => router.back()}>
            <Octicons name="x" size={24} color={"white"} />
          </Pressable>
        </Animated.View>
        <Animated.View entering={FadeInDown.springify().delay(100)}>
          {status == "downloading" ? (
            <View
              style={styles.button}
             
            >
              <ActivityIndicator name="small" size={24} color={"white"} />
            </View>
          ) : (
            <Pressable
              style={styles.button}
              onPress={DownloadImage}
            >
              <Octicons name="download" size={24} color={"white"} />
            </Pressable>
          )}
        </Animated.View>
      </View>
    </BlurView>
  );
};

export default image;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: wp(4),
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.1)",
  },
  loading: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
  },
  button: {
    height: hp(6),
    width: hp(6),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
  },
});
