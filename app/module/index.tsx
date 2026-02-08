import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stupid shit1</Text>
            <Text style={styles.title}>Stupid shit2</Text>
            <Text style={styles.title}>Stupid shit3</Text>
            <Text style={styles.title}>Stupid shit4</Text>
            <Text style={styles.title}>Stupid shit5</Text>
            <Text style={styles.title}>Stupid shit6</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});