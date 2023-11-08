import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';

const ViewAvatar = ({url, isVisible, onCloseViewAvatar}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onCloseViewAvatar}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BlurView
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
          onTouchStart={onCloseViewAvatar}
        />
        <Image
          source={{uri: url}}
          resizeMode="cover"
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
      </View>
    </Modal>
  );
};

export default ViewAvatar;

const styles = StyleSheet.create({});
