import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState('All');
  const [id, setID] = useState(0);
  const handleTodo = todo =>{
    setTodo(todo)
  }

  const toggleListDone = () =>{
    setList("Done")
  }
  const toggleListAll = () =>{
    setList("All")
  }
  const toggleListActive = () =>{ 
    setList("Active")
  }

  const handleAdd = () => {
    setTodos(todos => [...todos, {
      "id":id,
      "todo":todo, 
      "compeleted": false
    }])
    setID(id => id+1)
  }

  const toggleCompelete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) todo.compeleted = !todo.compeleted
        return todo
      })
    )
  }

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:30}}>TODO LIST</Text>
      
      <View style={styles.input}>
        <TextInput style={styles.inputText}onChangeText={handleTodo}/>
        <FontAwesome name="plus-square" style={styles.add} onPress={handleAdd}/>
      </View>

      <View style={styles.buttons}>
      <TouchableOpacity onPress={toggleListAll}>
          <Text style={{backgroundColor: list=='All' ? '#ff00ff' : 'white'}}> All </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleListActive}>
          <Text style={{backgroundColor: list=='Active' ? '#ff00ff' : 'white'}}> Active </Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={toggleListDone}>
          <Text style={{backgroundColor: list=='Done' ? '#ff00ff' : 'white'}}> Done </Text>
        </TouchableOpacity>
      </View>
      <Text>Can you see this text ? </Text>
      
      <FlatList style={{width:"80%"}}
      keyExtractor={(item, index) => item.id.toString()}
      data={todos}
      renderItem={(todo) =>{
        if (list == 'Done'){
          return todo.item.compeleted &&
          <TodoItem todo={todo} toggleCompelete= {toggleCompelete}/>
        }
        else if (list == 'Active'){
            return !todo.item.compeleted &&
            <TodoItem todo={todo} toggleCompelete= {toggleCompelete}/>
            }
        else{
            return <TodoItem todo={todo} toggleCompelete= {toggleCompelete}/>
          }
        }
      }
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    flex: 1,
    backgroundColor: 'pink',
    alignItems:"center", 
    marginTop:25
  },
  buttons:{
    width:"50%",
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"white"
  },
  input:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  inputText:{
    width:"70%", 
    borderWidth:2
  },
  todos:{
    flexDirection:"row",
    width:"70%"
  }, 
  add:{
    fontSize:30,
  }
});

