import React from "react";
import {Button, Text,View} from "react-native";

const Fourth = ({navigation}) => {
    function goToFifth(){
        navigation.navigate('Fifth');
     }
    return(
        <View>
            <Text>HELLO FOURTH</Text>
            <Button title="KAYDET" onPress={goToFifth} />
        </View>
    )
};
export default Fourth;