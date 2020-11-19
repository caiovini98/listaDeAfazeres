import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Animated, TouchableOpacity, Keyboard } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Aplicativo() {
    const navigation = useNavigation();
    const [icone, setIcone] = useState('eye');
    const [senhaUser, setSenhaUser] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 40}));
    const [opacidade] = useState(new Animated.Value(0));

    useEffect(()=> {
      Animated.parallel([
        Animated.spring(offset.y, {
          toValue: 0,
          speed: 4,
          bounciness: 20,
          useNativeDriver: true,
        }),
        Animated.timing(opacidade, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start();
      
    }, []);

    function onIconePress() {
        let icone = (secureTextEntry) ? "eyeo" : "eye";
        setSecureTextEntry(!secureTextEntry);
        setIcone(icone);
        Keyboard.dismiss();
    }
    
    function validar() {
        const senha = 'falconlegal'
          if(senhaUser === senha) {
            setSenhaUser("");
            navigation.navigate('TelaLogin')
          } else {
              alert("Senha incorreta. Tente de novo");
              return;
          }
          Keyboard.dismiss();
    } 
    return(
        <View style={styles.container}>
            <Text style={styles.login}>Digite a senha para entrar no aplicativo</Text>
            <Animated.View
            style={[
            styles.containerAnimado, {
              opacity: opacidade,
              transform: [
                {translateY: offset.y}
              ]
            }
          ]}
          >
            <View style={styles.viewLogin}>
                <TextInput 
                style={styles.inputSenha}
                secureTextEntry={secureTextEntry}
                onChangeText = {texto => setSenhaUser(texto)}
                />
                <TouchableOpacity onPress={onIconePress} style={{marginLeft: 4,}}>
                    <AntDesign name={icone} size={20} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.areaBtn} onPress={validar}>
              <View style={styles.btn}>
                <AntDesign name="login" size={40} color="black" />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49faca',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewLogin: {
        flexDirection: 'row', 
        alignItems:"center",
    },
    login: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 5
    },
    inputSenha: {
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 8,
        padding: 10,
        width: 150,
        fontSize: 17, 
        backgroundColor: '#fff'
      },
    areaBtn: {
        marginTop: 8,
        alignItems: 'center',
      },
      btn: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnTexto: {
        fontSize: 18,
        color: '#CFB997',
      }
})