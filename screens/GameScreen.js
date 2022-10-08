import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Title from "../components/ui/Title";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState();
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <Text></Text>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
