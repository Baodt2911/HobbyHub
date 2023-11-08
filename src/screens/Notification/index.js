import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BACK_ICON from '../../assets/icons/arrow-left-2.svg';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const Notification = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BACK_ICON />
        </TouchableOpacity>
        <Text style={styles.header_title}>Notification</Text>
      </View>
    </View>
  );
};

export default Notification;
