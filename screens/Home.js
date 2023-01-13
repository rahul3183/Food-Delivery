import { View, Text, Image, TextInput, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import SanityClient from '../sanity';

const Home = () => {

  const navigation = useNavigation();
  const [featuredCategory,setFeaturedCategory] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown:false,
    });
  },[])

  useEffect(() => {
    SanityClient.fetch(
      `
        *[_type == "featured"] {
          ... 
        }
    `
      )
      .then(data => setFeaturedCategory(data))
  },[])

  //console.log(featuredCategory);

  return (
    <SafeAreaView className="bg-white pt-5">
      <StatusBar translucent/>
      {/*Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{
          uri:'https://links.papareact.com/wru'
        }} className="h-7 w-7 bg-gray-300 p-4 rounded-full"></Image>

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now !</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
        </View>
        </View>

      {/*SearchArea*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 mt-1">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput keyboardType='default' placeholder="Search for food"/>
        </View>
      </View>

      {/*Content*/}
      <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom:180,}}>

      {/*Category */}
      <Categories/>

      {/* Featured */}

      {featuredCategory?.map(category => (
          <Featured
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

      {/* <Featured id="1" title="Featured" description="Top picks for you" /> 

       <Featured id="2" title="Featured" description="Big Discount" /> 

       <Featured id="3" title="Featured" description="Best in your town" /> 
      */}
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Home