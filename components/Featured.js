import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

const Featured = ({id,title,description}) => {

  const [restaurants,setRestaurants] = useState();

  useEffect(() => {
    client.fetch(
      `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurant[] -> {
          ...,
          dishes[] -> ,
          type -> {
            name
          }
        }
      }[0]
    `
      ,{id})

      .then(data => setRestaurants(data?.restaurant))
  },[id])

  //console.log(restaurants);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      className="pt-4">
        
        {/*Cards */}

        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            desc={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}

        {/*
        <RestaurantCard id="1" imgUrl="https://picsum.photos/seed/picsum/200/300" title="Yo! Shsushi!" rating="5" genre="Japanese"
        address="Main street" desc="This is a description" dishes={{}} long={20} lat={0}/>
        <RestaurantCard id="1" imgUrl="https://picsum.photos/seed/picsum/200/300" title="Yo! Shsushi!" rating="5" genre="Japanese"
        address="Main street" desc="This is a description" dishes={{}} long={20} lat={0}/>
        <RestaurantCard id="1" imgUrl="https://picsum.photos/seed/picsum/200/300" title="Yo! Shsushi!" rating="5" genre="Japanese"
        address="Main street" desc="This is a description" dishes={{}} long={20} lat={0}/>
  */}
      </ScrollView>
    </View>
  )
}

export default Featured