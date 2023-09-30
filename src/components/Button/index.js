import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonCustom = ({onPress, title, style, styleText, disabled}) => {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          backgroundColor: '#050522',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
