import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Host() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Host Susceptibility</Text>
      <Text>  
      Host susceptibility to rabies varies depending on the species. While all mammals 
      are susceptible to rabies, some species are more commonly affected than others. 
      Domestic animals such as dogs, cats, and livestock can contract rabies through exposure
       to infected wildlife or other infected animals. Additionally, wild animals such as raccoons, 
       bats, skunks, and foxes are known reservoirs for the rabies virus and play a significant 
       role in its transmission. Humans are also susceptible to rabies, typically through bites 
       or scratches from rabid animals. Vaccination programs for domestic animals and public health 
       measures aimed at preventing human exposure, such as post-exposure prophylaxis, are essential 
       for controlling rabies transmission and reducing the risk of human infection.     
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