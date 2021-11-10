import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const CategoryGridTile = ({ title, onSelect, color }) => {
    return (
        <TouchableOpacity 
        style={styles.gridItem}
        onPress={onSelect}>
        <View style={{ ...styles.container, ...{backgroundColor: color } }}>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;