import { Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style'

const Form = ({ title, setTitle, description, setDescription, error, handleSubmit}) => {
    return (<>
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
    </>
    )
}

export default Form;