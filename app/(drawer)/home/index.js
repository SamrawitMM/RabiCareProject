import { Text, View, StyleSheet,Image } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from "expo-router";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Page() {
  return (
    <View style={styles.container}>
    <Image source={require('../../../assets/adoctor_image.png')} style={styles.img} />
    <Text style={styles.title}>RabiCare</Text>
    <Text style={styles.detail}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Text>
    <TouchableOpacity
      style={styles.btn}
      onPress={() => props.navigation.navigate("Detail")}
    >
      <Text style={styles.text}>Next</Text>
    </TouchableOpacity>
   </View>
    
      //  <View style={styles.container}>
      //   <Text style={{ fontSize: 24 }}>Index page of Home Drawer</Text>
      // </View> 
      
  //     <Link href={"/home/next-page"} style={{ marginTop: 16, fontSize: 18 }}>
  //   <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
  // </Link> 
    


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "45%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#E2443B",
    paddingHorizontal: 120,
    paddingVertical: 5,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    color: "#FFF",
  },
});