import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
  return <View style={styles.card }>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 20 : 30,
    backgroundColor: Colors.primary800,
    elevation: 5, //android only
    shadowOffset: { width: 0, height: 2 }, //iOS only
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
});
