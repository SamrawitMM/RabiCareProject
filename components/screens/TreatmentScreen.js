import { Text, StyleSheet, View, Image, Icon, ImageBackground, TouchableOpacity } from "react-native";

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';


const translations = { en, am, or};

export default function Treatment() {
    const language = useSelector(state => state.language.language);
    const { treat_title, treat_description1, treat_description2 } = translations[language];


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        // height: "300%",
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
            <Image source={require('../../assets/adoctor_image.png')} style={styles.img} />

        <View style={{
          flexDirection: "row",
          width: "100%",
          paddingTop: 40,
          alignItems: "center",
          // backgroundColor: "#04ff44",

        }}>
          
          {/* <View style={{
            width: "50%",
            backgroundColor: "#045544",

          }}>
          </View> */}

<View style={{
                    // flexDirection:"row",
                    // borderColor:"#9ca1a2",
                    // borderRadius:20,
                    // borderWidth:0.2,
                    // paddingVertical:5,
                    // alignItems:"center"
                }}>


          </View>



        </View>
        
      </View>
      


       <View style={styles.container}>
        <Text style={styles.title}>{treat_title}</Text>
        <Text style={styles.paragraph}>
          {treat_description1}</Text>
               
          <Text style={styles.paragraph}>
          {treat_description2}
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