import { FlatList } from 'react-native'
import React from 'react'
import HeaderHome from '@/app/component/HeaderHome'
import data from '@/data/challenge.json'
import ItemChallenge from '@/components/ItemChallenge'
import ScreenWrapper from '@/components/ScreenWrapper'

const Bookmark = () => {
  return (
    <ScreenWrapper bg="white">
      <HeaderHome title="Challenge" />
      <FlatList
        className="mt-4 flex-1 px-4"
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={(item) => <ItemChallenge data={item.item} />}
      />
    </ScreenWrapper>
  )
}

export default Bookmark
