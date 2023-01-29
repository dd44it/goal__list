import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [enteredGoalText, setEnteredGoalText ] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
 
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    if(!enteredGoalText.length) return
    setCourseGoals(prevVal => [
      ...prevVal, 
      {
        text: enteredGoalText,
        id: Math.random().toString()
      },
    ])
    setEnteredGoalText('')
  }

  function removeAllGoal(){
    setCourseGoals([])
  }

  function deleteGoalHandler(id){
    console.log(id)
    setCourseGoals(prevVal => prevVal.filter(item => item.id !== id))
  }

  const templateGoals = courseGoals.map(goal =>
    (
      <View style={styles.goalItem}>
        <Text style={styles.goalText} key={goal}> {goal} </Text>
      </View>
    ) 
  )

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add new goal' 
        color="#5e0acc" 
        onPress={startAddGoalHandler}
      />
      {
        modalIsVisible &&
        <View style={styles.wrapperRemoveBtn}>
          <Button title="Remove all goal" onPress={removeAllGoal} />
          <GoalInput 
            onChangeEvent={goalInputHandler} 
            value={enteredGoalText} 
            onPressAddGoal={addGoalHandler} 
            visible={modalIsVisible}
          />
        </View>

      }


      <View style={styles.goalsContainer}>
        { courseGoals.length &&
          <FlatList
            data={courseGoals}
            renderItem={ (itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text}
                  onDeleteItem={() => { deleteGoalHandler(itemData.item.id) } }
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false} 
          />
        }
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
  goalsContainer: {
    flex: 4,
  },
  wrapperRemoveBtn: {
    marginBottom: 24,
  }
});
