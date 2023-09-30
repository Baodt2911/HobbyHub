import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Filter = ({isVisible, onClose}) => {
  return (
    <Modal
      style={{flex: 1}}
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View></View>
      </View>
    </Modal>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939CC',
  },
});
