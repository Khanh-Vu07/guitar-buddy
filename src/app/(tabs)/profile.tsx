import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useAppSelector } from '@/redux'
import Avatar from '@/components/ui/Avatar'
import colors from 'theme/color'
import { supabase } from '@/lib/supabase'
import ScreenWrapper from '@/components/ScreenWrapper'

const Profile = () => {
  const [activeNotify, setActiveNotify] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)

  const profile = useAppSelector((state) => state.user.data.profile)

  const onLogout = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      setLoading(false)
      return Alert.alert('Sign out', "There's an error signing out", [{ text: 'OK' }])
    }
    router.replace('/')
  }

  if (!profile) return null

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator className="my-8" size="large" color={colors.primary[600]} />
      </View>
    )
  }

  return (
    <ScreenWrapper bg="white">
      {/* <View className="flex-row flex justify-center items-center pb-2 border-b border-b-[#D1D5DB]">
        <Text className="font-bold text-xl">Information</Text>
      </View> */}
      <View className="mx-4 mt-[28px]">
        <View className="flex flex-col m-auto items-center">
          <Avatar size="lg" uri={profile?.image} />
          <Text className="font-bold text-2xl mt-3 mb-[32px]">{profile?.name}</Text>
        </View>
        <TouchableOpacity
          className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2"
          onPress={() => router.navigate('/profile/edit')}
        >
          <View className="flex flex-row gap-2 items-center">
            <Image source={images.iconProfile} className="w-[48px] h-[48px]" resizeMode="cover" />
            <Text className="font-bold text-base">Profile</Text>
          </View>
          <AntDesign name="right" size={20} color="#6B7280" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate('/change-pasword')}
          className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2"
        >
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={images.iconChangePass}
              className="w-[48px] h-[48px]"
              resizeMode="cover"
            />
            <Text className="font-bold text-base">Change Password</Text>
          </View>
          <AntDesign name="right" size={20} color="#6B7280" />
        </TouchableOpacity>
        <View className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2">
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={images.iconNotification}
              className="w-[48px] h-[48px]"
              resizeMode="cover"
            />
            <Text className="font-bold text-base">Notification</Text>
          </View>
          <Switch value={activeNotify} onChange={() => setActiveNotify(!activeNotify)} />
        </View>
        <TouchableOpacity
          onPress={onLogout}
          className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2"
        >
          <View className="flex flex-row gap-2 items-center">
            <Image source={images.iconLogout} className="w-[48px] h-[48px]" resizeMode="cover" />
            <Text className="font-bold text-base">Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default Profile
