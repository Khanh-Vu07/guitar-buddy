import React from 'react'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native'

import { icons } from '@/constants'

type TabIconProps = {
  name: string
  icon: any
  focused: boolean
  color: string
  size: number
}

const TabIcon = ({ name, color, focused, icon }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text style={{ color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#0C5FFF',
          tabBarInactiveTintColor: '#1F2937',
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 84,
            paddingTop: 16
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: (props) => <TabIcon name="" icon={icons.home} {...props} />,
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            tabBarIcon: (props) => <TabIcon name="" icon={icons.challenge} {...props} />,
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: (props) => <TabIcon name="" icon={icons.post} {...props} />,
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            tabBarIcon: (props) => <TabIcon name="" icon={icons.history} {...props} />,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: (props) => <TabIcon name="" icon={icons.profile} {...props} />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout