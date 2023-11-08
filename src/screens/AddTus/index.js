import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import NEXT_ICON from '../../assets/icons/arrow-right.svg';
import {useNavigation} from '@react-navigation/native';
const AddTus = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        {/* title  */}
        <View style={styles.header_title}>
          <Text style={styles.title}>New Post</Text>
          {/* btn next  */}
          <TouchableOpacity onPress={() => navigation.navigate('Caption')}>
            <NEXT_ICON />
          </TouchableOpacity>
        </View>
        {/* Image post  */}
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/13/1f/cc/131fcc7b4b5857ac83a04ee04636f161.jpg',
          }}
          resizeMode="cover"
          style={styles.image_post}
        />
      </View>
      {/* footer  */}
      <View style={styles.footer}></View>
    </View>
  );
};

export default AddTus;
