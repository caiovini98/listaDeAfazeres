import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Keyboard, AsyncStorage} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ToDoList from '../../../components/ToDoList/ToDoList';

export default function Tarefa({ route }){
  const [task, setTask] = useState([{
    titulo: null,
    descricao: null
  }]);
  const [descricao, setDescricao] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescricao, setNewDescricao] = useState('');

  async function addTask() {
    if(newTask === '' || newDescricao === '') {
      alert("Digite uma tarefa ou descrição valida.");
      return;
    }
    const tarefaIgual = task.filter(task => task === newTask);
    if (tarefaIgual.length != 0) {
      alert("Tarefa já existente. Ponha uma nova.");
      return;
    }
    task.push({
      titulo: newTask,
      descricao: newDescricao
    });
    setTask([...task]);
    setDescricao([...descricao]);
    setNewTask("");
    setNewDescricao("");
    Keyboard.dismiss();
  }

  async function removeTask(item) {
    setTask(task.filter(tasks => tasks != item))
  }

  function taskFeita() {

  }

  useEffect(() => {
    async function carregarDados() {
      const task = await AsyncStorage.getItem("task");
      if (task) {
        setTask(JSON.parse(task));
      }
    }
    carregarDados();
  }, [])

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task",JSON.stringify(task));
    }
    salvaDados();
  }, [task])

    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.title}>Olá, {route.params?.nome}. Adicione uma tarefa</Text>
        </View>
        <View style={styles.form}>
          <TextInput 
          style={styles.input}
          placeholder="Digite a tarefa"
          placeholderTextColor= '#CFB997'
          onChangeText = {text => setNewTask(text)}
          value={newTask}
          />
          <TextInput 
          style={styles.inputDescricao}
          placeholder="Digite a descrição"
          placeholderTextColor= '#CFB997'
          onChangeText = {text => setNewDescricao(text)}
          value={newDescricao}
          />
          <View style={styles.btn}>
            <Text style={{fontSize: 20, color:"#fff"}}>Adicionar tarefa</Text>
            <TouchableOpacity style={styles.areaBtn} onPress={() => addTask()}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewFlat}>
          <FlatList 
          style={styles.flatList}
          data={task}
          keyExtractor={() => Math.random().toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ToDoList item={item} removeTask={removeTask}/>}
          />
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49faca',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginTop: 15,
    textAlign: 'center'
  },
  form: {
    padding: 0,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  input: {
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 5
  },
  inputDescricao: {
    height: 80,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 5
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  areaBtn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFB997',
    borderRadius: 4,
    margin: 10,
  },
  viewFlat: {
    flex: 1
  },
  flatList: {
    flex: 1,
    marginTop: 6
  }
});
