import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {

    const items = useSelector(selectBasketItems);
    const navigation =useNavigation();
    const total = useSelector(selectBasketTotal);

    if(items.length === 0) return null;

  return (
    <View className="absolute bottom-8 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold bg-[#01A296] rounded-md text-lg py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Cart</Text>
        <Text className="text-lg text-white font-extrabold">
        {'\u20B9'} {total}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon