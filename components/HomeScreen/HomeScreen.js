import React , {useContext} from "react";
import { View, Text } from "react-native";

const HomeScreen = () => { 
    const isDarkMode = useContext(ThemeContext);
    return (
    <View style={{backgroundColor: isDarkMode ? 'yellow' : 'black'}}>
        <Text style={{color: isDarkMode ? 'black':'yellow'}}>WELCOME TO MY APPLICATION</Text>
    </View>
    );
};

export default HomeScreen