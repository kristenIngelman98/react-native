import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableHighlight activeOpacity={0.5} onPress={props.onDelete}>
            <View style={styles.listItem} on>
                <Text>{props.title}</Text>
            </View> 
        </TouchableHighlight>
        
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});
export default GoalItem;