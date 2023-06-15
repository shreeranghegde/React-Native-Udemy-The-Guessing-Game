import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/Colors";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Computer's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 5,
    borderRadius: 40,
    padding: 12,
    marginVertical: 10,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
