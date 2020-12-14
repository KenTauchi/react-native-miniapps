import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

const TextScreen = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View>
      <Text>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Text>Enter Password</Text>
      {pass.length < 5 ? <Text>Plase provde at least 6 </Text> : null}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        secureTextEntry={true}
        onChangeText={(newPass) => setPass(newPass)}
      />
      <Text>My Name is {name}</Text>
    </View>
  );
};

export default TextScreen;
