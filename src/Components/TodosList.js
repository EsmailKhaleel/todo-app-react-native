import { ScrollView } from 'react-native'
import React from 'react'
import styles from '../style'
import TodoItem from './TodoItem'

const TodosList = ({ todos, filter, handleDelete, handleDone }) => {
    return (
        <ScrollView style={styles.todosContainer}>
            {todos
                .filter((todo) => filter === 'All' || todo.status === filter)
                .map((todo) => (
                    <TodoItem key={todo.id} todo={todo}
                        onDelete={() => handleDelete(todo.id)} onDone={() => handleDone(todo.id)} />
                ))}
        </ScrollView>
    )
}

export default TodosList