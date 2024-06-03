import { View, Text, Button, StyleSheet, SafeAreaView,
    ScrollView } from 'react-native'
import React from 'react'
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';


const translations = { en, am, or};


export default function Classification() {
    // const openDrawer = ()=>{
    //     navigation.dispatch(DrawerActions.openDrawer())
    // }

  const language = useSelector(state => state.language.language);
  const { cla_title, cla_title1, cla_title2, cla_title3, cla_title4,
    cla_title5,  cla_title6, cla_title7, cla_title8,
    cla_title9, cla_title10, cla_title11, cla_title12,
    cla_title13, cla_title14, cla_description1,
    cla_description2, cla_description3, cla_description4,
    cla_description5, cla_description6, cla_description7 } = translations[language];


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View>
    <View style={styles.container}>
      <Text style={styles.title}>{cla_title}</Text>
      <Text style={styles.label}>{cla_title1}:</Text>
      <Text style={styles.value}>{cla_title2}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title1.toLowerCase()}
        </Text>{" "}
        <Text style={styles.value}>{cla_title2}</Text>
        <Text style={styles.descriptionText}>
            {cla_description1}
        </Text>
      </Text>

      <Text style={styles.label}>{cla_title3}:</Text>
      <Text style={styles.value}>{cla_title4}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title4.toLowerCase()}
        </Text>{" "}
        <Text style={styles.value}>{cla_title4}</Text>
        <Text style={styles.descriptionText}>
            {cla_description2}
        </Text>
      </Text>

      <Text style={styles.label}>{cla_title5}:</Text>
      <Text style={styles.value}>{cla_title6}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title5}
        </Text>{" "}
        <Text style={styles.value}>{cla_title6}</Text>
        <Text style={styles.descriptionText}>
            {cla_description3}
        </Text>
      </Text>

      <Text style={styles.label}>{cla_title7}:</Text>
      <Text style={styles.value}>{cla_title8}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title7}
        </Text>{" "}
        <Text style={styles.value}>{cla_title8}</Text>
        <Text style={styles.descriptionText}>
            {cla_description4}
        </Text>
      </Text>

      <Text style={styles.label}>{cla_title9}:</Text>
      <Text style={styles.value}>{cla_title10}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title9}
        </Text>{" "}
        <Text style={styles.value}>{cla_title10}</Text>
        <Text style={styles.descriptionText}>
            {cla_description5}
        </Text>
      </Text>

      <Text style={styles.label}>{cla_title11}:</Text>
      <Text style={styles.value}>{cla_title12}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title11}
        </Text>{" "}
        <Text style={styles.value}>{cla_title12}</Text>
        <Text style={styles.descriptionText}>
            {cla_description6}
        </Text>
      </Text>

      <Text style={styles.label}>{cla_title13}:</Text>
      <Text style={styles.value}>{cla_title14}</Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionText}>
          Rabies belongs to the {cla_title13}
        </Text>{" "}
        <Text style={styles.value}>{cla_title14}</Text>
        <Text style={styles.descriptionText}>
            {cla_description7}
        </Text>
      </Text>
     
    </View>     
    </View>
    </ScrollView>
    </SafeAreaView>
  )
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
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333',
      },
      value: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#007bff',
      },
  
      descriptionText: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 5,
      },
  });