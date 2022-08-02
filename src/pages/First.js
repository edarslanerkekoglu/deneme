import React from "react";
import {Text,View,Button,StyleSheet, SafeAreaView} from "react-native";


const First = ({navigation}) => {
    function goToSecond(){
        navigation.navigate('Second');
    }
       function goToGirisYap() {
        navigation.navigate('GirisYap');
       }
     
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.text} >HELLO FİRST</Text>
            <View style={styles.fixToText}>
        <Button
          title="GİRİŞ YAP"
          color="#87ceeb"
          onPress={ goToGirisYap}
        />
        <Button
          title="KAYIT OL"
          color="#87ceeb"
         onPress={goToSecond} 
        />
      </View>
        </View>
        </SafeAreaView>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:50,
        fontWeight:'bold',
        height:400,
        textAlign:'center',
        color:'#87ceeb',
       
        
    
    },
    button:{
        fontSize:30,
        fontWeight:'bold',
        backgroundColor:'red',
        alignItems:'flex-end',
        justifyContent:'flex-end',
    
        
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },

})
export default First;