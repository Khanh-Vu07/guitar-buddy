import { FlatList } from 'react-native'
import React from 'react'
import HeaderHome from '@/app/component/HeaderHome'
import { posts as data } from '@/data/post'
import ItemPost from '@/components/ItemPost'
import ScreenWrapper from '@/components/ScreenWrapper'

const Create = () => {
  return (
    <ScreenWrapper bg="white">
      <HeaderHome title="Lessons" />
      <FlatList
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={({ item }) => <ItemPost data={item} />}
      />
    </ScreenWrapper>
  )
}

export default Create
