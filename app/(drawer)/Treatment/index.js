import { Text, StyleSheet, View, Image, Icon, ImageBackground, TouchableOpacity } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function Treatment() {

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: "300%",
        backgroundColor: "#044244",
      }}
    >
      <View
        style={{
          height: 260,
          width: "100%",
          paddingHorizontal: 25,
          backgroundColor: "#042a44",

        }}
      >
            <Image source={require('../../../assets/adoctor_image.png')} style={styles.img} />

        <View style={{
          flexDirection: "row",
          width: "100%",
          paddingTop: 40,
          alignItems: "center",
          // backgroundColor: "#04ff44",

        }}>
          
          <View style={{
            width: "50%",
            backgroundColor: "#045544",

          }}>
          </View>

<View style={{
                    flexDirection:"row",
                    borderColor:"#9ca1a2",
                    borderRadius:20,
                    borderWidth:0.2,
                    paddingVertical:5,
                    alignItems:"center"
                }}>


          </View>



        </View>
        
      </View>
      


       <View style={styles.container}>
        <Text style={styles.title}>Treatment for Rabies</Text>
        <Text style={styles.paragraph}>
          The treatment for rabies typically involves a combination of wound care, vaccination,
          and, in some cases, administration of rabies immune globulin (RIG). After potential
          exposure to the rabies virus through a bite or scratch from a rabid animal, immediate
          wound cleaning and disinfection are crucial to reduce the risk of virus transmission.</Text>
               
          <Text style={styles.paragraph}>
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

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   padding: 20,
    // //   backgroundColor: 'black',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff', // Updated text color
  },
  paragraph:{
    color: '#fff2ee',
    textAlign:"left",
    justifyContent:"center",
    fontSize:14, 
    marginTop:10,

  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', 
    // Updated text color
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});