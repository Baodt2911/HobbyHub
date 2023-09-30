import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return <Text style={styles.logo}>HobbyHub.</Text>;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
});
