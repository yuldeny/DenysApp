import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export const CardItem = ({ text, img, price }) => {
  return (
     <TouchableOpacity
      onPress={() => Alert.alert("Пицца добавлена в корзину", text)}
      style={styles.btn}
    >
      <Image style={styles.image} source={{ uri: img }} />
      <Text>{text}</Text>
      <Text>{price} ₴</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "50%",
  },
  image: {
    marginTop: 15,
    width: "100%",
    height: 175,
    borderRadius: 4,
  },
});