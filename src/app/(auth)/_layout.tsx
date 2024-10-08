import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Optionally configure static options outside the route.*/}
      </Stack>
    </>
  )
}
