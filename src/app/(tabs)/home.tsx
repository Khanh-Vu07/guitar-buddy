import { FlatList, ScrollView, View } from 'react-native'
import React from 'react'
import HeaderHome from '@/app/component/HeaderHome'
import data from '../../data/music.json'
import ItemHomeAbsolute from '@/components/ItemHomeAbsolute'
import TitleHome from '@/components/TitleHome'
import ItemHomeVertical from '@/components/ItemHomeVertical'
import { router } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper'

const defaults = [data[1], data[6], data[8], data[9]]
const easyLectures = data.filter((item) => item.level === '1')
const mediumLectures = data.filter((item) => item.level === '2')
const hardLectures = data.filter((item) => item.level === '3')

const Home = () => {
  return (
    <ScreenWrapper bg="white">
      <HeaderHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          className="mt-4 px-4 mb-6"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={defaults}
          renderItem={(item) => <ItemHomeAbsolute data={item.item} pathName="/home-detail" />}
          ListFooterComponent={<View className="w-8" />}
        />
        <TitleHome
          title="Beginner"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Beginner',
                level: '1',
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
          title="Intermediate"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Intermediate',
                level: '2',
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
          title="Advanced"
          onPress={() =>
            router.push({
              pathname: '/detail-level',
              params: {
                title: 'Advanced',
                level: '3',
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
    </ScreenWrapper>
  )
}

export default Home
