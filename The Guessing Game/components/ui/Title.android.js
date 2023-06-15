import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 5,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth:'90%',
    width: 300,
  },
});
