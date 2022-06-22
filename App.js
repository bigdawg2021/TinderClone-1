import React from 'react';
import {Text, Image, ImageBackground, View} from 'react-native';
import styles from './components/styles';


const App = () => {
  return (
    <View style={styles.pageContainer}>
    <View style={styles.card}>
      <ImageBackground source={{uri: 'https://i.imgflip.com/4ys4vg.png'}} style={styles.image}> 
      <View style={styles.cardInner}>
      <Text style={styles.name}>Name</Text>
      <Text style={styles.bio}>Info here</Text>
      </View> 
      </ImageBackground>
      </View>
      </View>
  );
};

export default App;
