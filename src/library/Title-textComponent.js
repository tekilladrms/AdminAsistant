import react from "react";
import { View, Image } from "react-native";
import { Button, Text, Divider } from "react-native-paper";
// import { BACKGROUNDCOLOR, DARKGREYCOLOR } from "../../library/colors";

export const TitleText = ({ title, text }) =>{
    return(
        <View>
            <Divider />

            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#C0C0C0' }}>
                    { title }  
                </Text>
                <Text style={{ paddingLeft: 10, fontSize: 20, color: '#fff'}}>
                    {JSON.stringify(text).replace(/\"/g, "")}
                </Text> 
    
            </View>
        </View>
    );
}