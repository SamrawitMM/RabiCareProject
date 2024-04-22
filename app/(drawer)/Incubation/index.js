import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Incubation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incubation period</Text>
      <Text>  
      The incubation period for rabies, the time between exposure to the rabies virus 
      and the onset of clinical symptoms, typically ranges from several days to several
       years, with an average of one to three months in humans. However, the incubation 
       period can vary depending on factors such as the location and severity of the exposure, 
       the amount of virus inoculated, and the individual's immune response. During the incubation
        period, infected individuals may not exhibit any symptoms, making early detection and 
        treatment challenging. Once clinical symptoms manifest, the disease progresses rapidly,
         leading to neurological dysfunction and, ultimately, death in almost all cases if left 
         untreated. Therefore, prompt medical evaluation and post-exposure prophylaxis following
          potential rabies exposure are essential for preventing the onset of clinical disease.     
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