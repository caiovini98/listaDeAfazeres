import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert, AsyncStorage, Keyboard, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { set } from 'react-native-reanimated';

export default function TelaLogin() {
    const navigation = useNavigation();
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [icone, setIcone] = useState('eye');
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    

  function onIconePress() {
      let icone = (secureTextEntry) ? "eyeo" : "eye";
      setSecureTextEntry(!secureTextEntry);
      setIcone(icone);
      Keyboard.dismiss();
  }

  function isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      (typeof value === 'string' && value.trim().length === 0) ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }
  
  async function cadastrar() {
    const usuario = {
      user, senha
    }
    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
    Keyboard.dismiss();
    navigation.navigate('Tarefa', {nome: usuario.user})
    setUser("");
    setSenha("");
  }

  async function checarUsuario() {
    if(checkItemValue("usuario")) {
        const json = await AsyncStorage.getItem("usuario");
        const usuario = JSON.parse(json);
        navigation.navigate('Tarefa', {nome: usuario.user})
    } 
  }

    function checkItemValue(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, data) => {
        if (error) {
          resolve(false);
        }
        if (isEmpty(data)) {
          resolve(false);
        }
        resolve(true);
      }).catch((err) => reject(err));
    });
  }

  useEffect(() => {
    checarUsuario();
  }, []);

    return (
      <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <View style={styles.login}>
              <Text style = {styles.textosLogin}>Login:</Text>
              <TextInput 
              style={styles.inputUser}
              placeholder='Digite o usuario'
              placeholderTextColor = '#CFB997'
              onChangeText = {text => setUser(text)}
              value={user}
              />
            </View>

            <View style={styles.login}>
              <Text style = {styles.textosLogin}>Digite a senha:</Text>
              <View style={{flexDirection: 'row', alignItems:"center"}}>
                <TextInput 
                style={styles.inputSenha}
                placeholder='Digite a senha'
                placeholderTextColor = '#CFB997'
                secureTextEntry={secureTextEntry}
                onChangeText = {text => setSenha(text)}
                value={senha}
                />
                <TouchableOpacity onPress={onIconePress} style={{marginLeft: 4,}}>
                  <AntDesign name={icone} size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.areaBtn} onPress={cadastrar}>
                <View style={styles.btn}>
                  <Text style={styles.btnTexto}>Entrar</Text>
                </View>
              </TouchableOpacity>

            </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49faca',
  },
  title: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 35
  },
  login: {
    margin: 22
  },
  textosLogin: {
    fontSize: 25,
    color: 'white'
  },
  inputUser: {
    marginBottom: 8,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CFB997',
    fontSize: 17, 
    backgroundColor: '#fff'
  },
  inputSenha: {
    flex: 1,
    marginBottom: 8,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CFB997',
    fontSize: 17, 
    backgroundColor: '#fff'
  },
  areaBtn: {
    marginTop: 8,
    height: 50,
    width: 85,
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 85,
    borderColor: '#CFB997',
    borderWidth: 1,
    borderRadius: 10, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    color: '#CFB997',
  }
});
