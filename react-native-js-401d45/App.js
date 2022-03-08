import React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './_app.style.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title = 'Open up App.js to start working on your app!' />
      <StatusBar style="auto" />
    </View>
  );
}


