import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { StatusBar } from 'expo-status-bar'

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

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(){
    if(!enteredGoalText.length) return
    setCourseGoals(prevVal => [
      ...prevVal, 
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    setEnteredGoalText('')
    endAddGoalHandler()
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
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button 
        title='Add new goal' 
        color="#a065ec" 
        onPress={startAddGoalHandler}
      />
      { courseGoals.length 
        ?
          <View style={styles.wrapperRemoveBtn}>
            <Button title="Remove all goal" onPress={removeAllGoal} />
          </View>
        : 
          ''
      }

      {
        modalIsVisible &&
          <GoalInput 
            onChangeEvent={goalInputHandler} 
            value={enteredGoalText} 
            onPressAddGoal={addGoalHandler} 
            visible={modalIsVisible}
            onCancel={endAddGoalHandler}
          />
      }


      <View style={styles.goalsContainer}>
        { 
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 4,
  },
  wrapperRemoveBtn: {
    marginBottom: 15,
    marginTop: 15,
  }
});
