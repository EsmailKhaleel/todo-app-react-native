import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { saveTodos } from '../../Data/storage';
import Form from '../../Components/Form';
import TodosList from '../../Components/TodosList';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from '../../StateManagement/Slices/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../Components/CustomButton';

export default function Home() {
    const dispatch = useDispatch();
    const { todos, filter } = useSelector(state => state.main);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    useEffect(() => {
        saveTodos(todos);
        console.log("Todos State is successfully stored: ", todos);
    }, [todos]);


    const handleSubmit = () => {
        if (title && description && isNaN(title) && isNaN(description)) {
            dispatch(addTodo({ title, description }));
            setTitle('');
            setDescription('');
            setError(false);
        } else {
            setError(true);
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleDone = (id) => {
        dispatch(updateTodo(id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainHeader}>Task Management</Text>

            <Form 
                title={title} 
                setTitle={setTitle} 
                description={description} 
                setDescription={setDescription}
                error={error} 
                handleSubmit={handleSubmit} 
            />

            {todos.length > 0 && (
                <>
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.filterContainer}>
                        {["All", "In progress", "Done"].map((status) => (
                            <CustomButton status={status} key={status} />
                        ))}
                    </View>

                    <TodosList />
                </>
            )}
        </SafeAreaView>
    );
}
