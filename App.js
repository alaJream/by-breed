import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View, FlatList, SafeAreaView, TextInput } from 'react-native'

import Item from './Item'

import { cats, dogs } from './breeds'


export default function App() {

  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <StatusBar style='auto' />
        <View style={styles.listContainer}>
          <FlatList
            data={cats.filter(item => item.breed.includes(search))}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item} />
            }}
            keyExtractor={item => item.breed}
          />

        </View>
        <View>
          <TextInput
            style={styles.search}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 65
  },
  listContainer: {
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 50,
    color: 'tomato',
    fontWeight: 'bold',
  },
  small: {
    fontSize: 40,
    color: '#ff6600'
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1
  }
});
