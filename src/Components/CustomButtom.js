import React from 'react'
import styles from '../style'
import { TouchableOpacity, Text } from 'react-native'

function CustomButtom({ status, filter, setFilter }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={filter === status ? styles.activeFilterBtn : styles.filterBtn}
            onPress={() => setFilter(status)}
        >
            <Text style={filter === status ? styles.activeFilterText : styles.filterText}>
                {status}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButtom