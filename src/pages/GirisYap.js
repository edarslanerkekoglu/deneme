import React from "react";
import {Text,View,StyleSheet,TextInput,Button} from "react-native";


const GirisYap= ({navigation}) => {
    
    function goToThird(){
        navigation.navigate('Third');
     }
    return(
        <View>
            <TextInput style ={styles.input}  placeholder="E-mail"     keyboardType="E-mail"     textContentType="E-mail" />
            <TextInput style ={styles.input}  placeholder= "Şifre" keyboardType="Şifre"  textContentType="Şifre" />  

             <View style={styles.button}>
            <Button 
        title="GİRİŞ YAP"
        color="#87ceeb"
        onPress={goToThird}
      />
      </View>
        </View>
    )
};
const styles=StyleSheet.create({
    input:{
        height:50,
        margin:20,
        borderWidth:2,
        padding:10,
        marginHorizontal:10,
        paddingHorizontal:10,
        
    },
    button:{
       paddingHorizontal:10,
       paddingVertical:50,
       paddingTop:30
    },
    text:{
        fontWeight:'bold'
    }
})
export default GirisYap;