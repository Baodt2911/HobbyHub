import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import List_Hobbies from '../../utils/listHobbies';
const ItemListHobby = ({name_hobby, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.txt_name_hobby}>{name_hobby}</Text>
    </TouchableOpacity>
  );
};
const ListHobbySearch = () => {
  const renderItem = ({item}) => {
    return <ItemListHobby name_hobby={item.name_hobby} />;
  };
  return (
    <FlatList
      data={List_Hobbies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 25,
        columnGap: 20,
        alignItems: 'center',
      }}
    />
  );
};
const styles = StyleSheet.create({
  txt_name_hobby: {
    color: '#3b3b3bcc',
  },
});
export default ListHobbySearch;
