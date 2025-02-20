import React from 'react'
import styles from '../style';
import { Text, View } from 'react-native';

function TodoItem({ todo, onDelete }) {
    const formattedDate = new Date(todo.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
    return (
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
            <Text style={styles.delete} onPress={() => onDelete(todo.id)}>
                Delete
            </Text>
        </View>
    )
}

export default TodoItem;