import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    Speech.speak(text);
  }

  return (
    <View style={styles.container}>

      <TextInput
      style={styles.textInput}
      onChangeText={(text) => setText(text)}
      />

      <Button
      title='Press to hear text'
      onPress={speak}
      />
    
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
  textInput: {
    width: 250,
    height: 70,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  }
});
