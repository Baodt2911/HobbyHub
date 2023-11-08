import {View, Text, FlatList} from 'react-native';
import React from 'react';

const Suggest = () => {
  const renderItem = ({item}) => {};
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate="normal"
        snapToAlignment="start"
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Suggest;
