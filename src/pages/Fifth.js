import React from "react";
import { Button, Text,View } from "react-native";
 
const Fifth = ({navigation}) => {
    function goToSix(){
        navigation.navigate('Six');
     }
    return(
        <View>
            <Text>HELLO FİFTH </Text>
            <Button title="KAYDET" onPress={goToSix} />
        </View>
    )
};
export default Fifth;

