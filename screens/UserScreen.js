import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowRightIcon, CheckBadgeIcon, TicketIcon } from 'react-native-heroicons/solid'

const UserScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-5 mt-2 bg-gray-50">
        <TouchableOpacity className="flex-row justify-between mt-5 items-center">
            <View>
              <Text className="text-xl">User</Text>
              <Text className="font-light text-xs">User details</Text>
            </View>
            <ArrowRightIcon  size={25} color="#00CCBB"/>
        </TouchableOpacity>
        <View className= "h-0.5 bg-gray-300 my-6"/>
        <TouchableOpacity className="flex-row justify-between items-center">
            <View>
              <Text className="text-xl">Orders</Text>
              <Text className="font-light text-xs">Your past orders</Text>
            </View>
            <ArrowRightIcon  size={25} color="#00CCBB"/>
        </TouchableOpacity>
        <View className= "h-0.5 bg-gray-300 my-6"/>
        <TouchableOpacity className="flex-row justify-between items-center">
            <View>
              <Text className="text-xl">Payments & Refunds</Text>
              <Text className="font-light text-xs">Payment methods & Refund status</Text>
            </View>
            <ArrowRightIcon  size={25} color="#00CCBB"/>
        </TouchableOpacity>
        </View>

        <View className="mt-4">
          <Text className="text-gray-500 p-4">Past Orders</Text>
          <View className="bg-gray-50 rounded-md pb-4">
            <View className="p-4">
              <View className="flex-row justify-between">
                  <View>
                    <Text className="text-lg">Street Feast</Text>
                    <Text className="text-xs text-gray-400">Model town</Text>
                    <Text className="text-xs text-gray-600 mt-2">{'\u20B9'} 170</Text>
                  </View>
                  <View className="flex-row">
                    <Text className="text-md mr-1">Delivered</Text>
                    <CheckBadgeIcon size={20} color="#00CCBB"/>
                  </View>
              </View>

              <View className="mt-6">
                <Text className="font-light text-gray-500">Chicken Feast Burger x 1</Text>
                <View className="flex-row justify-between mt-4">
                    <TouchableOpacity className="flex-1 h-10 bg-white border-[#00CCBB] border-2 items-center justify-center mr-2">
                      <Text className="text-[#00CCBB]">REORDER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 h-10 bg-white border-gray-800 border-2 items-center justify-center ml-2">
                      <Text className="text-gray-800">RATE FOOD</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default UserScreen