import {
  Image,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { supabase } from '@/lib/supabase'
import colors from 'theme/color'

const SignIn = () => {
  const [loading, setLoading] = useState(false)

  const [userData, setUserData] = useState({
    email: 'tuanna@gmail.com',
    password: 'tuan1234',
  })

  const onSubmit = async () => {
    try {
      setLoading(true)
      const formData = {
        email: userData.email.toLowerCase().trim(),
        password: userData.password.trim(),
      }
      if (formData.email.length === 0 || formData.password.length === 0) {
        return Alert.alert('Error', 'Please fill all the fields!')
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        Alert.alert('Login', 'Wrong email or password.', [{ text: 'OK' }])
      }
    } catch (error) {
      console.error(error)
      Alert.alert('Login', 'There was an error logging in', [{ text: 'OK' }])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color={colors.primary[600]} />
      </View>
    )
  }

  return (
    <>
      <SafeAreaView className="bg-white h-full relative flex-1">
        <View className="mx-6 mt-16">
          <Image
            source={require('@/assets/logo.png')}
            className="h-[80px] w-[80px] mt-10 mx-auto rounded"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-bold mt-10">Đăng nhập</Text>
          <Text className="mt-2 mb-12 text-center text-gray-500">
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
            onPress={onSubmit}
            containerStyle="w-full mt-7 bg-primary-600 min-h-[48px]"
            textStyle="text-white"
          />
          {/* <View className="flex mt-4 flex-row justify-center items-center">
            <TouchableOpacity>
              <Text className="text-gray-400 text-md">Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View> */}
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
