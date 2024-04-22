import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Pathogenesis() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pathogenesis for Rabies</Text>
      <Text>  
      The pathogenesis of rabies begins with the entry of the virus into the body through 
      the saliva of infected animals, typically transmitted via bites. The virus then replicates
       locally at the site of entry before traveling along peripheral nerves towards the central 
       nervous system. Upon reaching the brain and spinal cord, the virus infects neurons, leading 
       to the onset of clinical symptoms such as fever, headache, and neurological dysfunction. As 
       the disease progresses, the virus spreads to the salivary glands, increasing the risk of transmission 
       through saliva. Rabies is almost always fatal once symptoms appear, with death usually occurring due 
       to respiratory failure or cardiac arrest. Despite the immune response, which is often ineffective in
        clearing the virus from the central nervous system, vaccination and post-exposure prophylaxis remain
         crucial for preventing clinical rabies.      </Text>
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