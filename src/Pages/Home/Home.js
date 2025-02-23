import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../style';
import CustomButtom from '../../Components/CustomButtom';
import { initialTodos } from '../../Data/InitialTodos';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadTodos, saveTodos } from '../../Data/storage';
import Form from '../../Components/Form';
import TodosList from '../../Components/TodosList';

export default function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('All');
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  const todoStatus = ['All', 'In progress', 'Done'];
  useEffect(() => {
    const fetchTodos = async () => {
      const loadedTodos = await loadTodos();
      console.log("Loaded Todos From Storage", loadedTodos);
      setTodos(loadedTodos);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
    console.log("Todos State: ", todos);
  }, [todos]);

  const handleSubmit = () => {
    if (title && description && isNaN(title) && isNaN(description)) {
      const newTodo = {
        id: Date.now(),
        text: title,
        description: description,
        date: Date.now(),
        status: 'In progress',
      };
      setTodos(prevState => [
        ...prevState,
        newTodo
      ]);
      setTitle('');
      setDescription('');
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDelete = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const handleDone = (id) => {
    const updatedTodos = [...todos];
    const updatedTodoIndex = updatedTodos.findIndex(todo => todo.id === id);
    const updatedTodo = {
      ...updatedTodos[updatedTodoIndex],
    };
    if (updatedTodo.status === 'In progress') {
      updatedTodo.status = 'Done';
      updatedTodos[updatedTodoIndex] = updatedTodo;
      console.log(updatedTodo);
      setTodos(updatedTodos);
    } else if (updatedTodo.status === 'Done') {
      updatedTodo.status = 'In progress';
      updatedTodos[updatedTodoIndex] = updatedTodo;
      console.log(updatedTodo);
      setTodos(updatedTodos);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeader}>Task Management</Text>

      <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription}
        error={error} handleSubmit={handleSubmit}
      />

      {todos.length > 0 &&
        (<>
          <View style={styles.dividerLine} />

          <View style={styles.filterContainer}>
            {todoStatus.map((status) => (
              <CustomButtom status={status} filter={filter} setFilter={setFilter} key={status} />
            ))}
          </View>
          <TodosList todos={todos} filter={filter} handleDelete={handleDelete} handleDone={handleDone} />
          {/* <ScrollView style={styles.todosContainer}>
            {todos
              .filter((todo) => filter === 'All' || todo.status === filter)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={() => handleDelete(todo.id)} onDone={() => handleDone(todo.id)} />
              ))}
          </ScrollView> */}
        </>)
      }
    </SafeAreaView>
  );
}