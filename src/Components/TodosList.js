import { ScrollView } from 'react-native'
import React from 'react'
import styles from '../style'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../StateManagement/Slices/mainSlice'

const TodosList = () => {
    const { filter } = useSelector(state => state.main);

    const filteredTodos = useSelector(state =>
        state.main.todos.filter(todo => filter === "All" || todo.status === filter));

    return (
        <ScrollView style={styles.todosContainer}>
            {filteredTodos
                .filter((todo) => filter === 'All' || todo.status === filter)
                .map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
        </ScrollView>
    )
}

export default TodosList