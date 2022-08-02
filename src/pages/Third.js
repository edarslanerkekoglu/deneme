import React from "react";
import {Text, View, Button,StyleSheet,} from "react-native";


    const Third = ({navigation}) => {
        function goToFourth(){
            navigation.navigate('Fourth');
         }
    return (
        <View>
            <Text>HELLO SECOND</Text>
            
            <Button title="KAYDET" onPress={goToFourth} />
        </View>
    )
};

export default Third;