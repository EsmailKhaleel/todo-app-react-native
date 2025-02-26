import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../StateManagement/Slices/mainSlice';
import styles from '../style';

const CustomButton = ({ status }) => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(state => state.main.filter);

    const handlePress = () => {
        dispatch(setFilter(status));
    };

    return (
        <TouchableOpacity 
            style={activeFilter === status ? styles.activeFilterBtn : styles.filterBtn} 
            onPress={handlePress}
        >
            <Text style={activeFilter === status ? styles.activeFilterText : styles.filterText}>{status}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
