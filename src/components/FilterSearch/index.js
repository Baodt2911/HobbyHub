import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {WIDTH_SCREEN} from '../../utils/Screen';
import LOCATION_ICON from '../../assets/icons/location.svg';
import USER_ICON from '../../assets/icons/user.svg';
import LAYOUT_ICON from '../../assets/icons/layout-grid.svg';
const FilterSearch = ({isOpen, searchType, onChangeSearchType}) => {
  const animatedValue = useRef(new Animated.Value(-WIDTH_SCREEN)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [isOpen, animatedValue]);
  return (
    <Animated.View
      style={[styles.main, {transform: [{translateX: animatedValue}]}]}>
      <TouchableOpacity
        style={styles.btn_general}
        onPress={() => onChangeSearchType('general')}>
        <LAYOUT_ICON />
        {searchType === 'general' ? <View style={styles.active} /> : <></>}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn_user}
        onPress={() => onChangeSearchType('people')}>
        <USER_ICON />
        {searchType === 'people' ? <View style={styles.active} /> : <></>}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn_location}
        onPress={() => onChangeSearchType('location')}>
        <LOCATION_ICON />
        {searchType === 'location' ? <View style={styles.active} /> : <></>}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FilterSearch;
const BtnStyle = {
  opacity: 0.7,
  alignItems: 'center',
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#f4f4f4cc',
    flexDirection: 'row',
    columnGap: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_location: {
    ...BtnStyle,
  },
  btn_general: {
    ...BtnStyle,
  },
  btn_user: {
    ...BtnStyle,
  },
  active: {
    position: 'absolute',
    bottom: -8,
    width: 5,
    height: 5,
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
