/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ILLUSTRANTION from '../../assets/images/onboarding-1.svg';
import ButtonCustom from '../../components/Button';
import {HEIGHT_SCREEN} from '../../utils/Screen';
const Onboarding1 = ({nextScreen}) => {
  return (
    <View style={styles.container}>
      <ILLUSTRANTION width={400} height={HEIGHT_SCREEN < 700 ? 350 : 400} />
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subTitle}>
          HobbyHub - Where Passions Connect to Create Perfect Matches!
        </Text>
      </View>
      <View style={styles.cardBtn}>
        <ButtonCustom
          onPress={nextScreen}
          title="Next"
          styleText={{
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Poppins-Medium',
          }}
          style={{width: 140, height: 45, borderRadius: 100}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  cardTitle: {
    width: 300,
    alignItems: 'center',
    rowGap: 20,
    marginTop: 25,
  },
  title: {
    fontFamily: 'PoetsenOne-Regular',
    color: '#000',
    fontSize: 32,
  },
  subTitle: {
    color: '#3b3b3b',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  cardBtn: {
    position: 'absolute',
    bottom: 60,
  },
});
export default Onboarding1;
