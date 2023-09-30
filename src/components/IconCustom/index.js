import {StyleSheet, Text, View} from 'react-native';
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
const IconCustom = ({name}) => {
  switch (name) {
    case 'home':
      return <HOME_ICON />;
    case 'search':
      return <SEARCH_ICON />;
    case 'addTus':
      return <CUSTOM_ADD_TUS_ICON />;
    case 'categories':
      return <CATEGORIES_ICON />;
    case 'profile':
      return <ACCOUNT_ICON />;
  }
};

export default IconCustom;

const styles = StyleSheet.create({});
