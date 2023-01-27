import { StyleSheet, Text, View,} from 'react-native'


export default function GoalItem(props){
  return (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}> {props.text} </Text>
          </View>
        )
}

const styles = StyleSheet.create({
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
  },
})


