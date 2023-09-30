import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CIRCLE_ICON from '../../assets/icons/circle.svg';
import {useNavigation} from '@react-navigation/native';
const ItemStory = ({uid, image_user, name_user}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => navigation.navigate('ViewStory')}>
      <View style={styles.cardImage}>
        <View style={styles.circle_icon}>
          <CIRCLE_ICON />
        </View>
        <Image
          source={{uri: image_user}}
          resizeMode="cover"
          style={styles.image_user}
        />
      </View>
      <Text style={styles.name_user}>{name_user}</Text>
    </TouchableOpacity>
  );
};

export default ItemStory;

const styles = StyleSheet.create({
  main: {
    width: 55,
    height: '100%',
    rowGap: 5,
  },
  cardImage: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle_icon: {
    position: 'absolute',
    left: 1,
  },
  image_user: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  name_user: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    textAlign: 'center',
  },
});
