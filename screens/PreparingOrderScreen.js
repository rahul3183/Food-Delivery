import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';



const PreparingOrderScreen = () => {

    const navigation = useNavigation();
    const [isPlaced,setPlaced] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setPlaced(true);
          orderPlaced();
        },3000)
    },[])

    const orderPlaced = () => {
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'DeliveryScreen' }]
        });
        },2000)
    };

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.View
       animation="slideInUp"
       iterationCount={1}>
        <LottieView source={require('../assets/OrderPlacedIcon.json')} autoPlay className="h-80 w-80" />
      </Animatable.View>
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-[#00CCBB] font-bold text-center">
        <Text>Waiting for Restaurant to accept your order!</Text>
      </Animatable.Text>

      { isPlaced? <LottieView source={require('../assets/OrderPlaced.json')} autoPlay loop={false} className="h-24 w-24" />:
      <Progress.Circle size={60} indeterminate={true} color="#00CCBB"/>}
    </SafeAreaView>
    
  )
}

export default PreparingOrderScreen