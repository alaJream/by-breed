import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  FlatList,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'
import Item from './Item';

// Import the data from your JSON file
import { cats, dogs } from './breeds';

// Welcome Screen
function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Screen</Text>
    </View>
  );
}

// CatsSearchScreen
function CatsSearchScreen() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kav}
      >
        <StatusBar style="auto" />
        <View style={styles.listContainer}>
          <FlatList
            data={cats.filter(item => item.breed.includes(search))}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item} />;
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

// DogsSearchScreen
function DogsSearchScreen() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kav}
      >
        <StatusBar style="auto" />
        <View style={styles.listContainer}>
          <FlatList
            data={dogs.filter(item => item.breed.includes(search))}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item} />;
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

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cats"
          component={CatsSearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Dogs"
          component={DogsSearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 65,
  },
  listContainer: {
    width: '100%',
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
    color: '#ff6600',
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
  },
});

export default App;
