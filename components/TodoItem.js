import React, {useState} from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function TodoItem({todo, toggleCompelete}){
    return (
        <TouchableOpacity style={styles.todos} onPress={()=>toggleCompelete(todo.item.id)}>
            <FontAwesome size={20}name={todo.item.compeleted ? "plus" : "square"}/>
            <Text  style={{textDecorationLine: todo.item.compeleted ? "line-through" : "none"}}>{todo.item.todo}</Text>
          </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    todos:{
      flexDirection:"row",
      width:"100%"
    }
})