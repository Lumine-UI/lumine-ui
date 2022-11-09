import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { multiply } from 'lumine-ui';

export default function App() {
  const [res, setRes] = useState<number>(1);

  useEffect(() => {
    multiply(2, 3).then((result) => {
      setRes(result);
      });
    }, []);
    

  return (
    <View style={styles.container}>
      <Text>{res}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
