import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class SearchInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            autoCorrect={false}
            placeholderTextColor='white'
            style={styles.textInput}
            clearButtonMode='always'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
})

export default SearchInput;