import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ImageBackground, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
} from 'react-native';

import SearchInput from './components/SearchInput';
import helper from './utils/helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  handleUpdateLocation = city => {
    this.setState({ location: city })
  }

  componentDidMount() {
    this.handleUpdateLocation('London')
  }

  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground
          source={helper('rain')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>
          Light Cloud
          </Text>
          <Text style={[styles.largeText, styles.textStyle]}>24° F</Text>
          <SearchInput 
            placeholder='Search Any City'
            onSubmit={this.handleUpdateLocation} 
          />
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
    imageContainer: {
      flex: 1,
    },
    image: {
      flex: 1,
      height: null,
      width: null,
      resizeMode: 'cover',
      opacity: 0.6
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
    }
});

export default App;
