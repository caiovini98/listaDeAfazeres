import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';


export default function ToDoList({item, removeTask}) {
    if(item.titulo === null || item.descricao === null) {
        return(
            <View></View>
        )  
    } else if (item.titulo != '' && item.descricao != ""){
        const [icone, setIcone] = useState('checkcircle');
        const [circle, setCircle] = useState(true);

        function taskFeita() {
            let icone = (circle) ? "checkcircleo" : "checkcircle";
            setCircle(!circle);
            setIcone(icone);
            if(circle === true) {
                alert("Tarefa marcada como feita.");
            } else {
                alert("Tarefa desmarcada.");
            }
            Keyboard.dismiss();
        }

        return(
            <View style={styles.container}>
                <View style={styles.tarefaTitulo}>
                    <Text style={styles.text}>{item.titulo}</Text>
                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={taskFeita}>
                            <AntDesign name={icone} size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => removeTask(item)}>
                            <View style={{marginLeft: 5}}>
                             <AntDesign name="delete" size={20} color="black" />
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.descricao}>
                    <Text style={styles.textDescricao}>{item.descricao}</Text>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#CFB997',
        borderWidth: 1,
        borderColor: '#fff'
    },
    tarefaTitulo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingBottom: 8,
        padding: 5
    },
    text: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 4,
        textAlign: 'center'
    },
    botoes: {
        flexDirection: 'row',
    },
    descricao: {
        alignItems: 'center'
    },
    textDescricao: {
        fontSize: 20,
        color: "#fff",
        marginTop: 5
    },
})