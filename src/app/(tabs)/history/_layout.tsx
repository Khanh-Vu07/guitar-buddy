import { Stack } from 'expo-router'

const FavoritesScreenLayout = () => {
  return (
    <Stack
      screenOptions={{
      headerShown: false,
    }}
      bottomTabOptions={{
        hidden: true,
      }}
    >
      <Stack.Screen
        name="history"
        options={{}}
      />
      <Stack.Screen
        name="[history-detail]"
        options={{}}
      />
    </Stack>
  )
}

export default FavoritesScreenLayout;
