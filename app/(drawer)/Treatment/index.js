import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Treatment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treatment for Rabies</Text>
      <Text>  
      The treatment for rabies typically involves a combination of wound care, vaccination, 
      and, in some cases, administration of rabies immune globulin (RIG). After potential 
      exposure to the rabies virus through a bite or scratch from a rabid animal, immediate
       wound cleaning and disinfection are crucial to reduce the risk of virus transmission. 
       Post-exposure prophylaxis (PEP) consists of a series of rabies vaccine doses administered 
       over several weeks to stimulate the immune system to produce antibodies against the virus. 
       Additionally, in cases of severe exposure, rabies immune globulin (RIG) may be administered
        at the wound site to provide immediate passive immunity. Once clinical symptoms of rabies 
        appear, the disease is almost always fatal, with no effective treatment available. Therefore,
         timely administration of PEP following potential exposure is critical for preventing the 
         development of clinical rabies and saving lives. Public health measures such as vaccination
          programs for domestic animals and wildlife control are also essential for preventing rabies 
          transmission to humans. 
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