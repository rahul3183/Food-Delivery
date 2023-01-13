import { View, Text, SafeAreaView, TouchableOpacity,Image, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const CartScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal);


  /*  const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const fetchPaymentSheetParams = async () => {
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paymentMethodType: 'card',
          total_order_value: basketTotal + 40
        })
      })
      const { clientSecret } = await response.json()
  
      return {
        clientSecret
      }
    }

    const initializePaymentSheet = async () => {
      const { clientSecret } = await fetchPaymentSheetParams()
  
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Deliveroo'
      })
      if (!error) {
        setLoading(true)
      }
    }

    const openPaymentSheet = async () => {
      const { error } = await presentPaymentSheet()
  
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message)
        setLoading(false)
      } else {
        navigation.navigate('PreparingOrder')
      }
    }
  */

    const [groupedItemsInCart,setGroupedItemsInCart] = useState([]);

    useEffect(() => {
      const groupedItems = items.reduce((results, item) => {
        ;(results[item.id] = results[item.id] || []).push(item)
        return results
      }, {})
  
      setGroupedItemsInCart(groupedItems)
      //initializePaymentSheet();
    }, [items])

    //console.log(items);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar translucent/>
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xl">
         

          <View>
            <Text className="text-lg font-bold text-center">Cart</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
          className="rounded-full bg-gray-100 absolute top-8 left-5">
            <XCircleIcon color="#00CCBB"  height={40} width={40}/>
          </TouchableOpacity>
         
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image source={{
              uri:'https://links.papareact.com/wru'
            }} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
            <Text className="flex-1 text-black"> Deliver in 30-45 minutes</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>

        
        
        <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupedItemsInCart).map(([key,items]) => (
              <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                <Text className="text-[#00CCBB] text-bold">{items.length} X</Text> 
                <Image
                  source={{uri: urlFor(items[0]?.image).url()}} className="h-12 w-12 rounded-xl" />

                <Text className="flex-1">{items[0]?.name}</Text>  

                <Text className="text-gray-600">
                {'\u20B9'} {items[0]?.price}
                </Text>

                <TouchableOpacity onPress={() => dispatch(removeFromBasket({id:key}))} >
                  <Text className="text-[#00CCBB] text-xs">Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>



          <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                  <Text className="text-gray-400">Subtotal</Text>
                  <Text className="text-gray-400">{'\u20B9'} {basketTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-400">Delivery Fee</Text>
                  <Text className="text-gray-400">{'\u20B9'} 40</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-400 ">Order Total</Text>
                  <Text className="font-extrabold">{'\u20B9'} {basketTotal + 40}</Text>
                </View>

                <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4"  onPress={() =>  navigation.navigate('PreparingOrderScreen')}>
                  <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                </TouchableOpacity>
          </View>
          
      </View>
    </SafeAreaView>
  )
}

export default CartScreen