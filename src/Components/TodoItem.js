import React from 'react'
import styles from '../style';
import { Platform, Pressable, Text, View } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

function TodoItem({ todo, onDelete, onDone }) {
    const { navigate } = useNavigation();
    const formattedDate = new Date(todo.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
    

    return (
        <Pressable onPress={() =>  navigate("TodoDetails", {todo, onDelete, onDone})}>
        <View style={styles.todoContainer}>
            <View style={styles.todoHeaderContainer}>
                <Text style={[styles.todoTitle, todo.status === 'Done' && styles.doneTodo]}>
                    {todo?.text}
                </Text>
                <Text style={styles.todoTitle}>
                    {formattedDate}
                </Text>
            </View>
            <Text style={styles.todoDescription}>
                {todo?.description}
            </Text>
            <View style={styles.DoneDeleteContainer}>
            <Text style={styles.markAsDone} onPress={() => onDone(todo.id)}>
            {
            Platform.OS === 'android' ? 
            todo.status === 'Done' ? <AntDesign name="checkcircle" size={24} color="#2ECC71" />
            :<AntDesign name="checkcircleo" size={24} color="#2ECC71" />
            :
            <AntDesign name="checkcircleo" size={24} color="#2ECC71" />
            }
            </Text>
            <Text style={styles.delete} onPress={() => onDelete(todo.id)}>
                <EvilIcons name="trash" size={35} color="red" />
            </Text>
            </View>
        </View>
        </Pressable>
    )
}

export default TodoItem;