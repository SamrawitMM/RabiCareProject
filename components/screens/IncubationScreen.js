import { Text, StyleSheet, View,Image } from "react-native";


import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from "react-native-gesture-handler";


const translations = { en, am, or};




export default function Incubation() {
    const language = useSelector(state => state.language.language);
    const { incu_title, incu_description } = translations[language];
  
  return (
    <View style={{backgroundColor:"#000000"}}>
      <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
        <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
      </View>
      <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:50, borderTopRightRadius:50}}>
      {/* <Text>Hello</Text> */}
         <Text style={styles.title}>{incu_title}</Text>
    <ScrollView>
       <Text style={styles.description}>  
        {incu_description}   
       </Text>
       </ScrollView>
      </View>
    </View>
    // <View style={{backgroundColor:"#000000"}}>
    //   <SafeAreaView >
    //     <View style={{justifyContent:"flex-start"}}>
    //       <TouchableOpacity>
    //         <ArrowLeftIcon size="20" color="black"/>
    //       </TouchableOpacity>
    //     </View>
    //     <View>
    //     <Image source={require('../../../assets/adoctor_image.png')} style={{width:200, height: 200}} />
    //     </View>
    //   </SafeAreaView>
    //   <View style={{backgroundColor:"#1fcccf",borderTopLeftRadius:50, borderTopRightRadius:50}}>

    //   </View>
    // </View>


    // <View style={styles.container}>
    //   <Text style={styles.title}>Incubation period</Text>
    //   <Text>  
    //   The incubation period for rabies, the time between exposure to the rabies virus 
    //   and the onset of clinical symptoms, typically ranges from several days to several
    //    years, with an average of one to three months in humans. However, the incubation 
    //    period can vary depending on factors such as the location and severity of the exposure, 
    //    the amount of virus inoculated, and the individual's immune response. During the incubation
    //     period, infected individuals may not exhibit any symptoms, making early detection and 
    //     treatment challenging. Once clinical symptoms manifest, the disease progresses rapidly,
    //      leading to neurological dysfunction and, ultimately, death in almost all cases if left 
    //      untreated. Therefore, prompt medical evaluation and post-exposure prophylaxis following
    //       potential rabies exposure are essential for preventing the onset of clinical disease.     
    //   </Text>
    // </View>
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
      paddingTop:10,
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555', // Updated text color
        padding: 20
    },
    paragraph:{
      paddingLeft:10,
      paddingRight:10,
      marginLeft:12,

    }
});