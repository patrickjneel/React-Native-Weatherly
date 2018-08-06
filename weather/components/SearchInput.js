import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = text => {
    this.setState({ text });
  }

  render() {
    const { placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={this.state.text}
          placeholder={placeholder}
          placeholderTextColor='white'
          style={styles.textInput}
          clearButtonMode='always'
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmitEditing}
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
