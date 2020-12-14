import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const syles = StyleSheet.create({});

const SquareScreen = () => {
  const colorAdjust = 15;
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_red":
        return { ...state, red: state.red + action.payload };
      case "change_green":
        return { ...state, green: state.green + action.payload };
      case "change_blue":
        return { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onInc={() => dispatch({ type: "change_red", payload: colorAdjust })}
        onDec={() =>
          dispatch({ type: "change_red", payload: -1 * colorAdjust })
        }
        color="Red"
        amount={state.red}
      />
      <ColorCounter
        onInc={() => dispatch({ type: "change_green", payload: colorAdjust })}
        onDec={() =>
          dispatch({ type: "change_green", payload: -1 * colorAdjust })
        }
        color="Green"
        amount={state.green}
      />
      <ColorCounter
        onInc={() => dispatch({ type: "change_blue", payload: colorAdjust })}
        onDec={() =>
          dispatch({ type: "change_blue", payload: -1 * colorAdjust })
        }
        color="Blue"
        amount={state.blue}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
