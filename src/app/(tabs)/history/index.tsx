import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderHome from '@/app/component/HeaderHome'
import data from '@/data/music.json'
import React from 'react'
import ItemHomeHorizontal from '@/components/ItemHomeHorizontal'

export default function History() {
  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <HeaderHome title="Lịch sử" />
      <FlatList
        className="mt-4 px-4"
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={(item) => (
          <ItemHomeHorizontal data={item.item} isHistory={false} pathName="/home-detail" />
        )}
      />
    </SafeAreaView>
  )
}
