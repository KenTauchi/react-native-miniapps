import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const syles = StyleSheet.create({});

const SquareScreen = () => {
  const colorAdjust = 15;
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return { ...state, red: state.red + action.amount };
      case "green":
        return { ...state, green: state.green + action.amount };
      case "blue":
        return { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  console.log("state amount ", state.amount);

  return (
    <View>
      <ColorCounter
        onInc={() => dispatch({ colorToChange: "red", amount: colorAdjust })}
        onDec={() =>
          dispatch({ colorToChange: "red", amount: -1 * colorAdjust })
        }
        color="Red"
        amount={state.red}
      />
      <ColorCounter
        onInc={() => dispatch({ colorToChange: "green", amount: colorAdjust })}
        onDec={() =>
          dispatch({ colorToChange: "green", amount: -1 * colorAdjust })
        }
        color="Green"
        amount={state.green}
      />
      <ColorCounter
        onInc={() => dispatch({ colorToChange: "blue", amount: colorAdjust })}
        onDec={() =>
          dispatch({ colorToChange: "blue", amount: -1 * colorAdjust })
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
