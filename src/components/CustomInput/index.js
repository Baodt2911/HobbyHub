/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';

const CustomInput = ({
  style,
  title,
  value,
  onChangeText,
  secureTextEntry,
  ICON,
  onPressICON,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const AnimatedValue = useRef(new Animated.Value(20)).current;
  useEffect(() => {
    if (isFocus) {
      Animated.timing(AnimatedValue, {
        toValue: -10,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(AnimatedValue, {
        toValue: 20,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocus, AnimatedValue]);
  const onFocusInput = () => {
    setIsFocus(true);
  };
  const onBlurInput = () => {
    setIsFocus(false);
  };
  return (
    <View
      style={[
        style,
        {
          borderWidth: isFocus ? 2 : 1,
          borderColor: isFocus ? '#000' : '#050522',
        },
      ]}>
      <Animated.View
        style={[
          styles.placeholderFocus,
          {
            opacity: !isFocus && value ? 0 : 1,
            transform: [{translateY: AnimatedValue}],
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: isFocus ? '#050522' : '#3b3b3bcc',
            },
          ]}>
          {title}
        </Text>
      </Animated.View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        selectionColor={'#050522'}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      {/* ICON */}
      {ICON ? (
        <TouchableOpacity onPress={onPressICON} style={styles.iconStyle}>
          <ICON width={24} height={24} />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    color: '#050522',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  placeholderFocus: {
    position: 'absolute',
    left: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  iconStyle: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
});
