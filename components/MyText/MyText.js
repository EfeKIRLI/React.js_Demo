import { React } from "react";
import { Text } from "react-native";
import style from "./style";

const MyText = () => {
    const handleTextClick = () => {
        alert('the text has been clicked.')
    }
    return <Text style={{color:'white'}} onPress={() => handleTextClick()}>
        Hello, Reat Native World.</Text>
}

export default MyText; 