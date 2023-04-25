import React from "react";
import { View, Text, StyleSheet } from 'react-native'

function Feature({ name, value }) {
    let stars = ''
    for (let i = 0; i < value; i += 1) {
        stars += '⭐️'
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.value}>{stars}</Text>
        </View>
    )
}

export default Feature

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    name: {
        fontSize: 16
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})