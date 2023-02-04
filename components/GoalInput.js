
import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";

export default function GoalInput(props){
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput 
            style={styles.textInput}
            placeholder="Your goal"
            onChangeText={props.onChangeEvent} 
            value={props.value}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title='Add goal' onPress={props.onPressAddGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
    width: '80%',
    marginBottom: 10,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#311b6b',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    marginHorizontal: 8,
  }
})


