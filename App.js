import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './src/style';
import TodoItem from './src/Components/TodoItem';
import CustomButtom from './src/Components/CustomButtom';
import { initialTodos } from './src/Data/InitialTodos';

export default function TodoApp() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('All');
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const todoStatus = ['All', 'In progress', 'Done'];

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
  console.log(filter);

  const handleDelete = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const handleDone = (id) => {
    const updatedTodos = [...todos];
    const updatedTodoIndex = updatedTodos.findIndex(todo => todo.id === id);
    const updatedTodo = {
      ...updatedTodos[updatedTodoIndex],
    };
    updatedTodo.status = 'Done';
    updatedTodos[updatedTodoIndex] = updatedTodo;
    console.log(updatedTodo);
    setTodos(updatedTodos);
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainHeaderContainer}>
        <Text style={styles.myName}>Esmail khaleel Shaaban</Text>
      </View>
        <Text style={styles.mainHeader}>Task Management</Text>

      <TextInput
        placeholder="Enter Task Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Enter Task Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      {error && <Text style={styles.error}>Please enter a valid todo!</Text>}

      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.8}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        {todoStatus.map((status) => (
          <CustomButtom status={status} filter={filter} setFilter={setFilter} key={status} />
        ))}
      </View>

      <ScrollView style={styles.todosContainer} showsVerticalScrollIndicator={false}>
        {todos
          .filter((todo) => filter === 'All' || todo.status === filter)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={() => handleDelete(todo.id)}  onDone={() => handleDone(todo.id)} />
          ))}
      </ScrollView>
    </View>
  );
}