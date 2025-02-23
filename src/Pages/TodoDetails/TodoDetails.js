import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './DetailsStyle';

export default function TodoDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const {todo, onDelete, onDone} = route.params;
  const formattedDate = new Date(todo.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
    // console.log(onDelete, onDone, todo)
  return (
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
