import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BottomSheet from '../../utils/BottomSheet';
import SEND_ICON from '../../assets/icons/send.svg';
import ItemComment from '../ItemComment';
const Comments = ({isVisible, onCloseComments}) => {
  const [txtComments, setTxtComments] = useState('');
  const [heightPercent, setHeightPercent] = useState(0.8);
  const txtCommentRef = useRef();
  useEffect(() => {
    if (isVisible) {
      txtCommentRef.current.focus();
    }
  }, [isVisible]);
  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setHeightPercent(0.35);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setHeightPercent(0.8);
    });
    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);
  return (
    <BottomSheet
      isVisible={isVisible}
      onCloseBottomSheet={onCloseComments}
      heightPercent={heightPercent}>
      <Text style={styles.title}>Comments</Text>
      {/* content  */}
      <View style={styles.card_comments}>
        <ItemComment />
        <ItemComment />
      </View>
      {/* input comment  */}
      <View style={styles.card_input_comments}>
        <Image
          source={{
            uri: 'https://sungdochoi.vn/wp-content/uploads/2020/04/sung-do-choi-m4a4-dragon-king-csgo-real-life-dan-thach.jpg',
          }}
          style={styles.image_user}
        />
        <TextInput
          placeholder="Comment for baodt2911"
          placeholderTextColor={'#393939'}
          style={styles.input_comments}
          value={txtComments}
          onChangeText={text => setTxtComments(text)}
          ref={txtCommentRef}
        />
        {/* Button post comment */}
        {txtComments && (
          <TouchableOpacity>
            <SEND_ICON />
          </TouchableOpacity>
        )}
      </View>
    </BottomSheet>
  );
};

export default Comments;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  card_comments: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#f4f4f4',
    paddingTop: 20,
    paddingHorizontal: 20,
    rowGap: 25,
  },
  card_input_comments: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor: '#fff',
  },
  image_user: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#f4f4f4',
  },
  input_comments: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
  },
});
