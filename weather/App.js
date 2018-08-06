import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  KeyboardAvoidingView, 
  Platform,
  TextInput, 
  View, 
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>Los Angeles</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    textStyle: {
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    }
});

export default App;
