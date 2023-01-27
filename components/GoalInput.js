
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function GoalInput(props){
  return (
    <View style={styles.inputContainer}>
      <TextInput 
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={props.onChangeEvent} 
          value={props.value}
      />
      <Button title='Add goal' onPress={props.onPressAddGoal} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    border: '#cccc',
    padding: 8,
    marginRight: 8,
    borderRadius: 2,
    width: '70%',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
})


