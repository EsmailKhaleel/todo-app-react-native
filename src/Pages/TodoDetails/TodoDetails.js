import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './DetailsStyle';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../StateManagement/Slices/mainSlice';

export default function TodoDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { todo } = route.params;
  const dispatch = useDispatch();

  const formattedDate = new Date(todo.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
    const onDelete = (id) => {
      dispatch(deleteTodo(id));
  };

  const onDone = (id) => {
      dispatch(updateTodo(id));
  };  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Task Details</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{todo.text}</Text>
        <Text style={styles.detailDescription}>{todo.description}</Text>
        <Text style={styles.detailDate}>
          Created on: {formattedDate}
        </Text>
        <Text style={styles.detailStatus}>Status: {todo.status}</Text>
      </View>

      {todo.status !== 'Done' && (
        <TouchableOpacity style={styles.doneButton} onPress={() => { 
          onDone(todo.id);
          navigation.goBack();
        }}>
          <Text style={styles.buttonText}>Mark as Done</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.deleteButton} onPress={() => { 
        onDelete(todo.id);
        navigation.goBack();
      }}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
