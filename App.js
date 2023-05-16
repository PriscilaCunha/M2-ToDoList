import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskId}>{props.id}</Text>
      <Text style={styles.taskDescription}>{props.description}</Text>

      <Button title='Done' onPress={props.done} />
    </View>
  )
}

export default function App() {

  const [tasks, setTasks] = React.useState([])
  const [text, setText] = React.useState("")

  const finishTask = (id) => {
    tasks.splice(id, 1)
    setTasks([...tasks])
  }

  return (
    <View style={styles.container}>
      {console.log('Tasks ', tasks)}
      <View><Text>SUPER LISTAS</Text></View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <Button style={styles.addButton} title='ADD' onPress={() => setTasks([...tasks, text])} />
      </View>

      <Text style={styles.title}>List of Tasks</Text>

      <ScrollView>
        {tasks.map((task, index) => <Task key={index} id={index} description={task} done={() => finishTask(index)} />)}        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    backgroundColor: '#fff',
  },

  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginRight: 5,
  },

  taskContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskDescription: {
    flex: 1,
    borderWidth: 2,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 5,
    fontStyle: 'italic'
  },
  taskId: {
    borderWidth: 2,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    width: 40,
    marginRight: 5,
    textAlign: 'center'
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    fontStyle: 'italic'
  }

});
