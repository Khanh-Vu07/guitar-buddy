import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderHome from '@/app/component/HeaderHome'
import data from '@/data/post.json'
import ItemPost from '@/components/ItemPost'

const Create = () => {
  return (
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <HeaderHome title="Bài viết" />
      <FlatList
        className="mt-4 flex-1"
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={(item) => <ItemPost data={item.item} />}
      />
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})
