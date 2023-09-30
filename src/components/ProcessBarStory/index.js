import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {WIDTH_SCREEN} from '../../utils/Screen';
const ItemProcessBar = ({number_part, time}) => {
  const WIDTH_PROCESS = WIDTH_SCREEN / number_part || WIDTH_SCREEN;
  const AnimationProcessValue_X = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(AnimationProcessValue_X, {
      toValue: WIDTH_PROCESS,
      duration: time,
      useNativeDriver: false,
    }).start();
  }, [AnimationProcessValue_X, WIDTH_PROCESS, time]);
  return (
    <View style={[styles.main, {width: WIDTH_PROCESS}]}>
      <Animated.View
        style={[
          styles.process_bar,
          {
            width: AnimationProcessValue_X,
          },
        ]}></Animated.View>
    </View>
  );
};
const ProcessBarStory = ({number_part, time}) => {
  let listProcessBar = new Array(number_part);
  for (let i = 0; i < listProcessBar.length; i++) {
    listProcessBar[i] = i * 2;
  }
  return (
    <View style={styles.container}>
      {listProcessBar.map(item => (
        <ItemProcessBar number_part={number_part} time={time} key={item} />
      ))}
    </View>
  );
};

export default ProcessBarStory;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', columnGap: 5},
  main: {
    height: 1,
    backgroundColor: '#f4f4f44D',
    borderRadius: 5,
  },
  process_bar: {
    height: '100%',
    backgroundColor: '#f4f4f4CC',
    borderRadius: 5,
  },
});
