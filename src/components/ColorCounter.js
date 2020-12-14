import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const syles = StyleSheet.create({});

const ColorCounter = ({ color, onInc, onDec, amount }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Text>{amount}</Text>

      {amount >= 255 ? (
        <Button title="Can't be over 255" />
      ) : (
        <Button onPress={onInc} title={`+ ${color}`} />
      )}
      {amount <= 0 ? (
        <Button title="Can't be under 0" />
      ) : (
        <Button onPress={onDec} title={`- ${color}`} />
      )}
    </View>
  );
};

export default ColorCounter;
