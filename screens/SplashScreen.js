import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {

    useEffect(() =>{
        setTimeout(() =>{
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainContainer' }]
          });
        },1200)
    },[]);

  return (
    <View className="flex-1 justify-center items-center bg-[#00CCBB]">
      <LottieView source={require('../assets/SplashAnimation.json')}  autoPlay style={{height:400,width:400}} />
      <Animatable.Text animation='fadeInUp' duration={700} className="text-4xl font-bold text-white">Deliveroo</Animatable.Text>
    </View>
  )
}

export default SplashScreen