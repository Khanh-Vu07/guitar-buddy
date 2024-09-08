import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderHome from '@/app/component/HeaderHome'
import data from '@/data/challenge.json'
import ItemChallenge from '@/components/ItemChallenge'

const Bookmark = () => {
  return (
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <HeaderHome title="Thử thách" />
      <FlatList
        className="mt-4 flex-1"
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={(item) => <ItemChallenge data={item.item} />}
      />
    </SafeAreaView>
  )
}

export default Bookmark

const styles = StyleSheet.create({})
