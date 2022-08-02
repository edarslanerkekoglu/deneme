import React,{useState} from "react";
import {Text,View,Button,SafeAreaView,TextInput,StyleSheet} from "react-native";

const Second = ({navigation}) => {
    

    function goToThird(){
        navigation.navigate('Third');
     }
    return (
        <SafeAreaView>
          <View style={styles.text}>
            <TextInput style ={styles.input}  placeholder="Ad"     keyboardType="name"     textContentType="name" />
            <TextInput style ={styles.input}  placeholder= "Soyad" keyboardType="surname"  textContentType="surname" />  
            <TextInput style ={styles.input}  placeholder="E-mail" keyboardType="e-mail"   textContentType="e-mail"/>
            <TextInput style ={styles.input}  placeholder="Şehir"  keyboardType="town"     textContentType="town"/>
            <TextInput style ={styles.input}  placeholder="İlçe"   keyboardType="district" textContentType="district"/>
            <TextInput style ={styles.input}  placeholder="Telefon" keyboardType="phone"   textContentType="phone"/>
            <TextInput style={styles.input}   placeholder="Şifre"  keyboardType="password" textContentType="password" />
            </View>
            <View style={styles.button}>
            
            <Button
        title="KAYIT OL"
        color="#87ceeb"
        onPress={goToThird}
      />
            </View>
            </SafeAreaView>
            
    )
    }
    const styles=StyleSheet.create({
        input:{
            height:40,
            margin:17,
            borderWidth:1,
            padding:10,
            marginHorizontal:10,
            paddingHorizontal:5,
            
            

            

        },
        button:{
            fontWeight:'bold',
            padding:50
            

          
        },
        text:{
            fontWeight:'bold'
        }
    })

export default Second;