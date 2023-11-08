import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {WIDTH_SCREEN} from '../../utils/Screen';

const ItemComment = () => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: 'https://bizweb.dktcdn.net/100/438/408/files/anh-dep-3d-yodyvn.jpg?v=1683534873601',
        }}
        style={styles.image_user}
      />
      {/* info  */}
      <View style={styles.card_info}>
        <View style={styles.info}>
          <Text style={styles.name_user}>baodt2911</Text>
          {/* Comment time */}
          <Text style={styles.comment_time}>1 minute</Text>
        </View>
        {/* content comments  */}
        <Text style={styles.comment_content}>
          Baodt code vippro the Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dicta, vel. Officiis sint repellat nobis accusamus
          porro est error corrupti? Numquam, assumenda? Consequatur vitae magni
          voluptate eum quisquam aut, numquam placeat?
        </Text>
        {/* btn reply */}
        <TouchableOpacity>
          <Text style={styles.btn_reply}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemComment;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 15,
  },
  image_user: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#f4f4f4',
  },
  card_info: {
    rowGap: 3,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  name_user: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#000',
  },
  comment_time: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#3b3b3bcc',
  },
  comment_content: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
    textAlign: 'justify',
    width: WIDTH_SCREEN * 0.65,
  },
  btn_reply: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#3b3b3bcc',
  },
});
