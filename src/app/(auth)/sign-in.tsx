import { Image, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/userSlice'

const SignIn = () => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    email: 'tuanquang01@gmail.com',
    password: 'abcd1234',
  })

  console.log(userData)

  const handleSignIn = () => {
    const alertTitle = 'Đăng nhập thất bại'
    if (userData.email.length == 0 || userData.password.length == 0) {
      Alert.alert(alertTitle, 'Email và Mật khẩu không được để trống')
    } else if (
      userData.email.toLowerCase() != 'tuanquang01@gmail.com' ||
      userData.password != 'abcd1234'
    ) {
      Alert.alert(alertTitle, 'Email và Mật khẩu không đúng')
    } else {
      dispatch(setUser())
      router.push(ERouteTable.HOME)
    }
  }

  return (
    <>
      <SafeAreaView className="bg-white h-full relative flex-1">
        <View className="mx-4">
          <Image
            source={images.logoApp}
            className="h-[80px] w-[80px] mt-10 mx-auto rounded"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-bold mt-10">Đăng nhập</Text>
          <Text className="mt-2 mb-4 text-center text-gray-500">
            Đăng nhập vào tài khoản của bạn
          </Text>

          <TextInput
            className="border p-3 border-gray-300 rounded-2xl"
            placeholder="Email"
            onChangeText={(text) => setUserData({ ...userData, email: text })}
            value={userData.email}
          />
          <TextInput
            className="border mt-4 p-3 border-gray-300 rounded-2xl"
            placeholder="Mật khẩu"
            secureTextEntry
            onChangeText={(text) => setUserData({ ...userData, password: text })}
            value={userData.password}
          />

          <CustomButton
            title="Đăng nhập"
            onPress={handleSignIn}
            containerStyle="w-full mt-7 bg-primary-600 min-h-[48px]"
            textStyle="text-white"
          />
          <View className="flex mt-4 flex-row justify-center items-center">
            <TouchableOpacity>
              <Text className="text-gray-400 text-md">Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View className="w-full bg-white">
        <View className="flex-row gap-1 flex text-center pb-10 mx-auto">
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => router.push(ERouteTable.SIGIN_UP)}>
            <Text className="text-primary-600 font-bold">Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default SignIn
