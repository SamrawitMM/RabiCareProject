import { Stack } from "expo-router";

export default function PathogenesisLayout() {
  return <Stack
  screenOptions={{
    // Hide the header for all other routes.
    headerShown: false,
  }}
/>;
}