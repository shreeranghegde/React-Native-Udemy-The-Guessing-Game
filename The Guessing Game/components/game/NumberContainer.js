import { Text, View, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText }>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: deviceWidth < 380 ? 15 : 25,
    borderRadius: 10,
    margin: deviceWidth < 380 ? 15 : 25,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: deviceWidth < 380 ? 15 : 30,
    fontFamily: 'open-sans-bold',
  },
});
