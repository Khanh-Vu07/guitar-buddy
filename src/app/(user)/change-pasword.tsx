import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { ERouteTable } from '@/constants/route-table'
import CustomButton from '@/components/CustomButton'
import ScreenWrapper from '@/components/ScreenWrapper'

export default function ChangePasword() {
  return (
    <ScreenWrapper>
      <View className="flex-row flex items-center pb-2 relative mb-8 border-b border-b-[#D1D5DB]">
        <TouchableOpacity onPress={() => router.back()} className="absolute ml-4 bottom-2">
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl m-auto">Change Password</Text>
      </View>
      <View className="mx-4">
        <Text className="text-sm text-gray-700">
          New password must be at least 8 characters long and contain at least one uppercase letter,
          one lowercase letter, one number and one special character.
        </Text>
        <TextInput
          className="border h-[50px] mt-4 p-3 border-gray-300 rounded-2xl"
          placeholder="Your current password"
        />
        <TextInput
          className="border h-[50px] mt-4 p-3 border-gray-300 rounded-2xl"
          placeholder="New password"
        />
        <TextInput
          className="border h-[50px] mt-4 p-3 border-gray-300 rounded-2xl"
          placeholder="New password confirmation"
        />
        <CustomButton
          title="Update"
          onPress={() => router.push(ERouteTable.SIGIN_IN)}
          containerStyle="w-full mt-7 bg-primary-600 min-h-[48px]"
          textStyle="text-white"
        />
      </View>
    </ScreenWrapper>
  )
}
