import { StyleSheet, Text, View, Pressable} from 'react-native'


export default function GoalItem(props){
  return (
        <View style={styles.goalItem}>
          <Pressable 
            android_ripple={{color: '#dddddd'}} 
            onPress={props.onDeleteItem}
            style={({pressed}) => pressed && styles.pressedItem }
          >
            <Text style={styles.goalText}> {props.text} </Text>
          </Pressable>
        </View>

        )
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: 'pink',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  goalText: {
    color: "white",
    padding: 16,
  },
  pressedItem: {
    backgroundColor: '#fc4363',
  }
})


