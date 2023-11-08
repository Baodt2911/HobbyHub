import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {HEIGHT_SCREEN} from './Screen';
const BottomSheet = ({
  isVisible,
  onCloseBottomSheet,
  heightPercent,
  children,
}) => {
  const MAX_UPWARD_TRANSLATE_Y = 0;
  const MAX_DOWNWARD_TRANSLATE_Y = HEIGHT_SCREEN * heightPercent;
  const DRAG_THRESHOLD = 100;
  const translateValue_Y = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gesture) => {
        translateValue_Y.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        translateValue_Y.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        lastGestureDy.current += gesture.dy;
        translateValue_Y.flattenOffset();
        if (gesture.dy >= DRAG_THRESHOLD) {
          springAnimation('down');
          onCloseBottomSheet();
        } else {
          springAnimation('up');
        }
      },
    }),
  ).current;
  const springAnimation = direction => {
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(translateValue_Y, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };
  const styleAnimation = {
    transform: [
      {
        translateY: translateValue_Y.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onCloseBottomSheet}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onCloseBottomSheet}
          style={{flex: 1}}></TouchableOpacity>
        {/* Main  */}
        <Animated.View
          style={StyleSheet.flatten([
            styles.main,
            {height: HEIGHT_SCREEN * heightPercent},
            styleAnimation,
          ])}>
          {/* Drag Area  */}
          <View style={styles.card_area} {...panResponder.panHandlers}>
            <View style={styles.drag_area} />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3939394D',
    justifyContent: 'flex-end',
  },
  main: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  card_area: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
  },
  drag_area: {
    width: 70,
    height: 4,
    backgroundColor: '#f4f4f4',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
