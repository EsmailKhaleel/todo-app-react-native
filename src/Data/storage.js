import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveTodos = async (newTodos) => {
    try {
        await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
        console.log("Data Stored Successfully ^-^")
    } catch (error) {
        console.error('Error saving todos:', error);
    }
};
export const loadTodos = async () => {
    try {
        const storedData = await AsyncStorage.getItem('todos');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            return parsedData;
        }
        else return [];
    } catch (error) {
        console.error('Error loading todos:', error);
    }
};
