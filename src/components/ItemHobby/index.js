import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemHobby = ({
  name_hobby,
  onSelectHobby,
  onRemoveSelected,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemHobby,
        {backgroundColor: isSelected ? '#050522CC' : '#fff'},
      ]}
      onPress={() => {
        if (isSelected) {
          onRemoveSelected(name_hobby);
        } else {
          onSelectHobby(name_hobby);
        }
      }}>
      <Text
        style={[styles.txtItemHobby, {color: isSelected ? '#fff' : '#333'}]}>
        {name_hobby}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemHobby: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#333333cc',
    borderRadius: 10,
  },
  txtItemHobby: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
export default ItemHobby;
