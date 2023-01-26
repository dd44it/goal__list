import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, } from 'react-native'

export default function App() {
  const [enteredGoalText, setEnteredGoalText ] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
 
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    if(!enteredGoalText.length) return
    setCourseGoals(prevVal => [...prevVal, enteredGoalText])
    // console.log(courseGoals)
  }

  const templateGoals = courseGoals.map(goal =>
    (
      <View style={styles.goalItem}>
        <Text style={styles.goalText} key={goal}> {goal} </Text>
      </View>
    ) 
  )

  console.log("templateGoals", templateGoals)

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} />
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <Button title="Remove all goal" />
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false} >
          {templateGoals.length ? templateGoals : <Text> Your goal list is empty </Text>}
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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
  textInput: {
    borderWidth: 1,
    border: '#cccc',
    padding: 8,
    marginRight: 8,
    borderRadius: 2,
    width: '70%',
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    backgroundColor: 'pink',
    padding: 16,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  goalText: {
    color: "white",
  }
});
