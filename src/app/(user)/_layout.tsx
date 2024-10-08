import React from 'react'
import { Stack } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="bookmark-detail" options={{}} />
        <Stack.Screen name="change-pasword" options={{}} />
        <Stack.Screen name="edit-profile" options={{}} />
        <Stack.Screen name="home-detail" options={{}} />
        <Stack.Screen name="create-detail" options={{}} />
        <Stack.Screen name="practice-screen" options={{}} />
        <Stack.Screen name="search" options={{}} />
        <Stack.Screen name="detail-level" options={{}} />
      </Stack>
    </>
  )
}

export default TabsLayout
