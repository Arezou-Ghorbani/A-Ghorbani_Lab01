import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>

            <Ionicons name="checkmark-circle" size={32} color="green" />

                <Text style={styles.itemText}> {props.text}</Text>
                
            </View>
            <Ionicons name="trash" size={30} color="red" />
        
        </View>

    )

}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'



    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.4,
        backgroundColor: '#55BCF6',
        marginHorizontal: 5,
        borderRadius: 5

    },
    itemText: {
        maxWidth: '80%'

    },


})
export default Task;
