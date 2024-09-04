import { FlatList, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderHome from '@/app/component/HeaderHome'

import data from '../../../data/music.json'
import ItemHomeAbsolute from '@/components/ItemHomeAbsolute'
import TitleHome from '@/components/TitleHome'
import ItemHomeVertical from '@/components/ItemHomeVertical'
import ItemHomeHorizontal from '@/components/ItemHomeHorizontal'
import { router } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView className="px-4 bg-white pb-6">
      <HeaderHome title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={(item) => <ItemHomeAbsolute data={item.item} pathName="/home-detail" />}
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
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={(item) => <ItemHomeVertical data={item.item} pathName="/home-detail" />}
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
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={(item) => <ItemHomeVertical data={item.item} pathName="/home-detail" />}
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
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={(item) => <ItemHomeVertical data={item.item} pathName="/home-detail" />}
        />
        <TitleHome
          title="Tất Cả Cấp Độ"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Tất Cả Cấp Độ',
              },
            })
          }
        />

        <FlatList
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={data}
          renderItem={(item) => <ItemHomeHorizontal data={item.item} pathName="/home-detail" />}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
