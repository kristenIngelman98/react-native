import React, { useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
      {/* setEnteredGoal to empty string to clear input once typed */}
    };

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enteredGoal}/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}><Button title="ADD" onPress={addGoalHandler}/></View>
              <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
              
            </View>
           
        </View>
      </Modal>
        
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      button: {
        width: '45%'
      }
});


export default GoalInput;