import { Text, StyleSheet, View, Image, ScrollView} from "react-native";
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';


const translations = { en, am, or};


export default function ClinicalSign() {
    const language = useSelector(state => state.language.language);
  const { sign_title, sign_description } = translations[language];

  return (
    
    <View style={{backgroundColor:"#000000"}}>
    <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
    </View>
    <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:50, borderTopRightRadius:50}}>
    <Text style={styles.title}>{sign_title}</Text>
    <ScrollView>
     <Text style={styles.description}>  
        {sign_description}
    
     </Text>
     </ScrollView>
    </View>
  </View>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Clinical Sign</Text>
    //   <Text>  
    //   Clinical signs of rabies can vary depending on the stage of the disease, 
    //   but commonly include neurological symptoms such as behavioral changes, 
    //   agitation, confusion, hallucinations, and paralysis. As the disease progresses,
    //    affected individuals may exhibit hypersalivation (foaming at the mouth), 
    //    hydrophobia (fear of water), aerophobia (fear of drafts or air), and difficulty 
    //    swallowing. Other signs may include fever, headache, and muscle weakness.
    //     In the later stages, patients may lapse into a coma before succumbing to 
    //     respiratory failure and death. Recognizing these clinical signs is essential 
    //     for early diagnosis and prompt initiation of post-exposure prophylaxis to prevent
    //      the progression of rabies, as the disease is nearly always fatal once symptoms manifest.    
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
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#555', // Updated text color
      padding:20
    },
    paragraph:{
      paddingLeft:10,
      paddingRight:10,
      marginLeft:12,
      marginBottom: 40

    }
});