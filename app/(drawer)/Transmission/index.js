import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Transmission() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transmission for Rabies</Text>
      <Text>  
      Rabies is primarily transmitted through the bite or scratch of an infected animal, 
      with dogs being the most common source of transmission to humans worldwide. The rabies 
      virus is present in the saliva of infected animals and can enter the body through broken
       skin or mucous membranes, such as those in the mouth, eyes, or nose. Once the virus enters
        the body, it travels along peripheral nerves towards the central nervous system, leading 
        to the onset of clinical symptoms. Additionally, rabies can also be transmitted through 
        exposure to infected saliva, such as through mucous membranes or open wounds, although 
        this mode of transmission is less common. Prompt medical treatment, including Vaccination
         and post-exposure prophylaxis, is crucial following exposure to rabies to prevent the 
         development of clinical disease. Public health measures aimed at controlling rabies in 
         animal populations, such as vaccination campaigns and population management strategies,
          are essential for reducing the risk of transmission to humans.      
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   padding: 20,
    // //   backgroundColor: 'black',
    padding:20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#555', // Updated text color
    },
});