import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HOME_ICON from '../../assets/icons/home.svg';
import SEARCH_ICON from '../../assets/icons/search.svg';
import ADD_TUS_ICON from '../../assets/icons/add-tus.svg';
import CATEGORIES_ICON from '../../assets/icons/categories.svg';
import ACCOUNT_ICON from '../../assets/icons/account.svg';
const CUSTOM_ADD_TUS_ICON = () => (
  <View
    style={{
      backgroundColor: '#050522',
      width: 55,
      height: 34,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <ADD_TUS_ICON />
  </View>
);
const BottomTabs = () => {
  return (
    <View style={styles.main}>
      {/* Button Home  */}
      <TouchableOpacity style={styles.item_icon}>
        {/* <SEARCH_ICON /> */}
        <HOME_ICON />
      </TouchableOpacity>
      {/* Button Search  */}
      <TouchableOpacity style={styles.item_icon}>
        <SEARCH_ICON />
      </TouchableOpacity>
      {/* Button add tus  */}
      <TouchableOpacity>
        <CUSTOM_ADD_TUS_ICON />
      </TouchableOpacity>
      {/* Button categories  */}
      <TouchableOpacity style={styles.item_icon}>
        <CATEGORIES_ICON />
      </TouchableOpacity>
      {/* Button pofile  */}
      <TouchableOpacity style={styles.item_icon}>
        <ACCOUNT_ICON />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item_icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
