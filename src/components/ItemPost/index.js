import {
  Animated,
  Easing,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MORE_ICON from '../../assets/icons/more.svg';
import {WIDTH_SCREEN} from '../../utils/Screen';
import LIKE_ICON from '../../assets/icons/heart.svg';
import COMMENT_ICON from '../../assets/icons/comment.svg';
import SHARE_ICON from '../../assets/icons/share.svg';
import SAVE_ICON from '../../assets/icons/bookmark.svg';
import FormatTime from '../../utils/FormatDate';
const ItemPost = ({
  name_user,
  image_user,
  content,
  list_photo,
  like,
  comment,
  createdAt,
}) => {
  const [isMore, setIsMore] = useState(false);
  const [imageActive, setImageActive] = useState(0);
  const scaleValue = useRef(new Animated.Value(0)).current;
  const doubleTap = useRef(0);
  const onViewableRef = useRef(({changed}) => {
    if (changed[0].isViewable) {
      setImageActive(changed[0].index);
    }
  });
  const onReactPost = () => {
    const now = new Date();
    const DELAY = 500;
    if (doubleTap.current && now - doubleTap.current < DELAY) {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.cubic,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 500,
          easing: Easing.cubic,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      doubleTap.current = now;
    }
  };
  const renderListPhoto = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={onReactPost}>
        <Image
          source={{uri: item.image_url}}
          resizeMode="cover"
          style={styles.image_post}
        />
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.header}>
        {/* Info User */}
        <View style={styles.info_user}>
          <Image
            source={{uri: image_user}}
            resizeMode="cover"
            style={styles.image_user}
          />
          <Text style={styles.name_user}>{name_user}</Text>
        </View>
        {/* Button more */}
        <TouchableOpacity>
          <MORE_ICON />
        </TouchableOpacity>
      </View>
      {/* List Image Post */}

      <View style={styles.card_list_image_post}>
        <FlatList
          data={list_photo}
          renderItem={renderListPhoto}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          decelerationRate={'normal'}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableRef.current}
        />
        {/* Slide dot */}
        {list_photo.length === 1 ? (
          <></>
        ) : (
          <>
            <View style={styles.slide_dots}>
              {list_photo.map((item, index) => (
                <View
                  key={item.id}
                  style={
                    imageActive === index ? styles.dot_active : styles.dot
                  }></View>
              ))}
            </View>
            {/* Page number images */}
            <View style={styles.page_number_images}>
              <Text style={styles.txt_page_number_images}>{`${
                imageActive + 1
              }/${list_photo.length}`}</Text>
            </View>
          </>
        )}
        {/* Like animated */}
        <View style={[styles.like_pop_image]}>
          <Animated.View
            style={{
              transform: [
                {
                  scale: scaleValue.interpolate({
                    inputRange: [0, 0.2, 0.6, 1],
                    outputRange: [0, 0.4, 0.8, 1],
                  }),
                },
              ],
              opacity: scaleValue.interpolate({
                inputRange: [0, 0.2, 0.6, 1],
                outputRange: [0, 0.4, 0.8, 1],
              }),
            }}>
            <LIKE_ICON fill="red" width={100} height={100} />
          </Animated.View>
        </View>
      </View>
      {/* content Post */}
      {!content ? (
        <></>
      ) : (
        <View
          style={[styles.card_content_post, {width: isMore ? '100%' : '80%'}]}>
          {isMore ? (
            <Text style={styles.txt_content_post}>{content}</Text>
          ) : (
            <>
              <Text numberOfLines={1} style={styles.txt_content_post}>
                {content}
              </Text>
              {/* Button more */}
              <TouchableOpacity onPress={() => setIsMore(!isMore)}>
                <Text style={styles.txt_btn_more}>More</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
      {/* Card controllers */}
      <View style={styles.card_controllers}>
        <View style={styles.main_controllers}>
          {/* Button Like */}
          <View style={styles.card_btn}>
            <TouchableOpacity style={styles.btn_like}>
              <LIKE_ICON stroke="black" />
            </TouchableOpacity>
            <Text style={styles.txt_btn}>{like}</Text>
          </View>
          {/* Button comment */}
          <View style={styles.card_btn}>
            <TouchableOpacity style={styles.btn_comment}>
              <COMMENT_ICON />
            </TouchableOpacity>
            <Text style={styles.txt_btn}>{comment}</Text>
          </View>
          {/* Button share */}
          <TouchableOpacity>
            <SHARE_ICON />
          </TouchableOpacity>
        </View>
        {/* Button save */}
        <TouchableOpacity>
          <SAVE_ICON />
        </TouchableOpacity>
      </View>
      {/* created At */}
      <Text style={styles.created_at}>{FormatTime(createdAt)}</Text>
    </View>
  );
};

export default ItemPost;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    marginBottom: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info_user: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  image_user: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  name_user: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
  },
  card_list_image_post: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  image_post: {
    width: WIDTH_SCREEN - 40,
    height: 300,
    borderRadius: 30,
  },
  card_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  txt_btn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
  },
  card_content_post: {
    paddingVertical: 10,
    justifyContent: 'center',
  },
  txt_content_post: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#3b3b3b',
    textAlign: 'justify',
  },
  txt_btn_more: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#000',
    textDecorationLine: 'underline',
  },
  card_controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main_controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  created_at: {
    color: '#3b3b3bcc',
    fontSize: 12,
    fontFamily: 'Poppin-Regular',
    marginTop: 5,
  },
  slide_dots: {
    position: 'absolute',
    width: '100%',
    height: 10,
    bottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 100,
  },
  dot_active: {
    width: 5,
    height: 5,
    backgroundColor: '#43A2FA',
    borderRadius: 100,
  },
  like_pop_image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page_number_images: {
    position: 'absolute',
    top: 15,
    right: 20,
    backgroundColor: '#39393966',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
  },
  txt_page_number_images: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
});
