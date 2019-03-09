import React from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { MapView, Constants, Permissions } from 'expo';

import geolocationService from './services/geolocationService';

// przykładowy Region do ustawienia jako initialRegion w MapView
// centrum mapy to współrzędne geograficzne (latitude, longitude)
// musimy podać także granice mapy, czyli odległość w stopniach od centrum
// od tego zależy jak duże zbliżenie mapy uzyskamy
const exampleRegion = {
  latitude: 50.0515114,
  longitude: 19.9133489,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default class App extends React.Component {
  state = {
    // TODO tutaj zainicjalizuj stan jeśli potrzebujesz
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      this.getLocationAsync();
    }
  }

  getLocationAsync = async () => {
    // TODO jeśli chcesz wycentrować mapę na aktualnej pozycji telefonu, to możesz zrobić to tutaj
  };

  // poniższa funkcja nie jest na razie nigdzie używana, ale możesz ją przypisać do propsa MapView onPress
  handleMapPress = e => {
    const { coordinate } = e.nativeEvent;
    // TODO zapisz współrzędne do stanu i pokaż marker
  };

  // poniższa funkcja nie jest na razie nigdzie używana, ale jeśli będziesz mieć marker na mapie, to się przyda
  handleMarkerPress = async e => {
    e.stopPropagation(); // to po to żeby nie wywołało się też this.handleMapPress
    // TODO zawołaj geolocationService.fetchInfo żeby dostać dane adresowe
  };

  render() {
    return <View style={styles.container}>// TODO dodaj MapView</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
