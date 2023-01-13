import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
// import MapView from 'react-native-maps';
import { EmptyBasket } from '../features/basketSlice';
import { ImageBackground } from 'react-native-web';

const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(EmptyBasket());
    },[]);
  

  return (
    <View className="bg-[#00CCBB] flex-1 pt-6">
      <SafeAreaView className="z-50">
      <StatusBar translucent/>
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={() => navigation.navigate('MainContainer')}>
                <XCircleIcon color="white" size={30}/>
            </TouchableOpacity>
            <Text className="text-white text-lg">Order Help?</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-4xl font-bold">30-45 Minutes</Text>
                </View>
                <Image source={{
                    uri:"http://links.papareact.com/fls",
                }} className="h-20 w-20" />
            </View>

            <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>

            <Text className="mt-3 text-gray-400">Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>
  {/*    <MapView initialRegion={{
        latitude:31.305065018734958,
        longitude:75.58170208209302,
        latitudeDelta:0.005,
        longitudeDelta:0.005,
       }} 
       className="flex-1 -mt-10 z-0" mapType='mutedStandard'>
         </MapView>

        <Marker coordinate={{
        latitude:31.305065018734958,
        longitude:75.58170208209302,
       }} 

       identifier="origin"
       pinColor="#00CCBB"/>
      
      */}

      <Image source={require('../assets/MapView.png')} style={{height:350,width:500}}/>
       <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
       <Image source={{
          uri:"http://links.papareact.com/wru",
          }} 
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5" />

          <View className="flex-1"> 
            <Text className="text-lg">Rahul</Text>
            <Text className="text-gray-400">Your Rider</Text>
          </View>

          <Text className="text-[#00CCBB] text-lg mr-10 font-bold">Call</Text>
       </SafeAreaView>
               
    </View>
  )
}

export default DeliveryScreen