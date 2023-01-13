import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {

    const {params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        desc,
        dishes,
        long,
        lat
    }} = useRoute();

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false,
        })
    },[]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            desc,
            dishes,
            long,
            lat
        }))
    },[dispatch])


    //console.log(dishes);

  return (
    <>

    <CartIcon/>

    <SafeAreaView>
    <StatusBar translucent/>
      <ScrollView>
        <View>
            <Image  source={{
                uri:urlFor(imgUrl).url(),
            }}
            className="h-56 w-full bg-gray-500"
            />

            <TouchableOpacity className="absolute top-14 left-4 rounded-full bg-gray-100 p-2" onPress={navigation.goBack}>
                <ArrowLeftIcon size={20} color="#00CCBB"/>
            </TouchableOpacity>
        </View>

        <View className="bg-white"> 
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon size={22} color="green" opacity={0.5}/>
                    <Text className=" text-xs text-gray-500">{rating}</Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <MapPinIcon size={22} color="gray" opacity={0.5}/>
                    <Text className=" text-xs text-gray-500">Nearby. {address}</Text>
                </View>
                
            </View>

            <Text className="text-gray-500 mt-2 pb-4">
                {desc}
            </Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
            <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
            <ChevronRightIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
        </View>   

        <View className="pb-32">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {
                dishes.map((dish) => (
                     <DishRow
                     key={dish._id}
                     id={dish._id}
                     name={dish.name}
                     desc={dish.short_description}
                     price={dish.price}
                     image={dish.image}
                     />
                ))
            }
        </View>
        </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default RestaurantScreen