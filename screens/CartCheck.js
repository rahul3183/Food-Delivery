import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CartScreen from './CartScreen'
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { selectBasketTotal } from '../features/basketSlice';

const CartCheck = () => {
    const basketTotal = useSelector(selectBasketTotal);
  return (
    <SafeAreaView className="flex-1 bg-white">
      { basketTotal == 0?<View className="items-center">
        <LottieView source={require('../assets/emptyCart2.json')} autoPlay size={100} style={{height:300,width:300}} />
        <Text className=" font-bold text-4xl text-gray-800">Your cart is empty</Text>
        <Text className=" font-light text-lg text-gray-800 mt-1">Load up the basket with some yummy food</Text>
      </View>: <CartScreen/>}
    </SafeAreaView>
  )
}

export default CartCheck