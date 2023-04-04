import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Infinite Scroll with YouTube Videos</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
