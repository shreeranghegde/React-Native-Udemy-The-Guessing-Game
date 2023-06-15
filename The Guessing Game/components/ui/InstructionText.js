import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children, style: parentStyle }) {
    return <Text style={[styles.instructionText, parentStyle]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
      },    
})