import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderHome from '@/app/component/HeaderHome'

import data from '../../../data/music.json'
import ItemHomeAbsolute from '@/components/ItemHomeAbsolute'
import TitleHome from '@/components/TitleHome'
import ItemHomeVertical from '@/components/ItemHomeVertical'
import ItemHomeHorizontal from '@/components/ItemHomeHorizontal'
import { router } from 'expo-router'

const defaults = [data[4], data[6], data[8], data[9]]
const easyLectures = data.filter((item) => item.level === '1')
const mediumLectures = data.filter((item) => item.level === '2')
const hardLectures = data.filter((item) => item.level === '3')

const Home = () => {
  return (
    <SafeAreaView className="bg-white pb-6">
      <HeaderHome title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          className="mt-4 px-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={defaults}
          renderItem={(item) => <ItemHomeAbsolute data={item.item} pathName="/home-detail" />}
          ListFooterComponent={<View className="w-8" />}
        />
        <TitleHome
          title="Cấp Độ Dễ"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Cấp Độ Dễ',
              },
            })
          }
        />
        <FlatList
          className="mt-4 px-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={easyLectures}
          renderItem={(item) => <ItemHomeVertical data={item.item} pathName="/home-detail" />}
          ListFooterComponent={<View className="w-8" />}
        />
        <TitleHome
          title="Cấp Độ Trung Bình"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Cấp Độ Trung Bình',
              },
            })
          }
        />
        <FlatList
          className="mt-4 px-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={mediumLectures}
          renderItem={(item) => <ItemHomeVertical data={item.item} pathName="/home-detail" />}
          ListFooterComponent={<View className="w-8" />}
        />
        <TitleHome
          title="Cấp Độ Khó"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Cấp Độ Khó',
              },
            })
          }
        />
        <FlatList
          className="mt-4 px-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={hardLectures}
          renderItem={(item) => <ItemHomeVertical data={item.item} pathName="/home-detail" />}
          ListFooterComponent={<View className="w-8" />}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
