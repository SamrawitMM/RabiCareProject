import { Stack } from "expo-router";

export default function TreatmentLayout() {
  return <Stack
  screenOptions={{
    // Hide the header for all other routes.
    headerShown: false,
  }}
/>;
}