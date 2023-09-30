/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ILLUSTRANTION from '../../assets/images/onboarding-2.svg';
import ButtonCustom from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../utils/Screen';
const Onboarding2 = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ILLUSTRANTION width={400} height={HEIGHT_SCREEN < 700 ? 350 : 400} />
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Discover Like-Minded Individuals</Text>
        <Text style={styles.subTitle}>
          Connect with those who share your interests. Our advanced algorithm
          ensures meaningful connections.
        </Text>
      </View>
      <View style={styles.cardBtn}>
        <ButtonCustom
          onPress={() => navigation.navigate('LoginOrRegister')}
          title="Start"
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
    width: WIDTH_SCREEN > 400 ? WIDTH_SCREEN * 0.85 : WIDTH_SCREEN * 0.7,
    alignItems: 'center',
    rowGap: 20,
    marginTop: 25,
  },
  title: {
    width: WIDTH_SCREEN * 0.6,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
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
export default Onboarding2;
