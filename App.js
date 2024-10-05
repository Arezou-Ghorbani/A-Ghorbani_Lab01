import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'
import React, { useState } from 'react';
import MySwitchComponent from './components/MySwitchComponent';

export default function App() {
  const [task, setTask] = useState();
  
  const [taskItems, setTaskItems] = useState([]);
  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <View style={styles.items}>
          {/* Task should be shown here */}
          {
            taskItems.map((item, index) => {
               return (
               
             <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                <Task  text={item} />
             </TouchableOpacity>
               )
              })

          }

        </View>
      </View>
      {/* inserting tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={"insert your task"} value={task} onChangeText={text => setTask(text)} />
          <MySwitchComponent va></MySwitchComponent>

          <TouchableOpacity onPress={handleTask}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>

            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },

  addText: {
    fontSize: 36,
    color: '#55BCF6'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginRight: 15
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,


  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },

});
