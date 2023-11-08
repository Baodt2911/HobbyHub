import {StyleSheet, Text, View, Platform, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Skeleton = ({width, height, style}) => {
  const translateX_Value = useRef(new Animated.Value(-width)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX_Value, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      }),
    ).start();
  }, [width, translateX_Value]);
  return (
    <View
      style={StyleSheet.flatten([
        {
          width: width,
          height: height,
          backgroundColor: 'rgba(0,0,0,0.10)',
          overflow: 'hidden',
        },
        style,
      ])}>
      <Animated.View
        style={{flex: 1, transform: [{translateX: translateX_Value}]}}>
        <LinearGradient
          colors={['transparent', '#f5f5f5', 'transparent']}
          start={{x: 0, y: 1}}
          style={{
            flex: 1,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
