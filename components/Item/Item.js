import React from "react";
import {View, Text} from "react-native";
import PropTypes  from "prop-types";

const Item = ({name, price}) => { 
   const clickName = () => {
      alert("selam")
   }
   return  <View>
    <Text onPress={() => clickName()}>{name}</Text>
    <Text>{price}</Text>
   </View>
}

Item.propTypes = { 
   name:PropTypes.string.isRequired,
   price:PropTypes.number.isRequired
}
export default Item;