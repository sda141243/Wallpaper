import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {wp,hp} from '../constants/common'
const index = () => {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
        <Image source={require('../assets/images/bg.png')}
        style={styles.bgimage}
        resizeMode='cover'
        />
        <View style={{flex:1}}>  
            <linearGradient
            colors={[
                'rgba(255,255,255,0)','rgba(255,255,255,0)','white','black'
            ]}
            style={styles.gradient}
            start={{x:0.5,y:0}}
            end={{x:0.5,y:0.8}}
            />
        </View>

    </View>
  )
}

export default index

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    bgImage:{
        width:wp(100),
        height:hp(100),
        position:'absolute'
    },
    gradient:{
        width:wp(100),
        height:hp(100),
        bottom:0,
        position:'absolute'
    }
})