import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ItemPost from '../ItemPost';
const fakeData = [
  {
    uid: 0,
    image_user:
      'https://antimatter.vn/wp-content/uploads/2022/06/hinh-anh-nguoi-yeu.jpg',
    name_user: 'Đỗ Bảo',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    list_photo: [
      {
        id: 0,
        image_url:
          'https://binhminhdigital.com/StoreData/images/PageData/mot-so-van-de-ban-can-luu-y-khi-chup-anh-cho-nguoi-gia-BinhMinhDigital2.jpg',
      },
      {
        id: 1,
        image_url:
          'https://binhminhdigital.com/StoreData/images/PageData/mot-so-van-de-ban-can-luu-y-khi-chup-anh-cho-nguoi-gia-BinhMinhDigital1.jpg',
      },
      {
        id: 2,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxUbpNAvXm9DUEqVdbl9sM-nT7vgcdDwikwDhcfD6KCv2ga83Hz_-hYVrDzfpNnII67U&usqp=CAU',
      },
    ],
    like: 1000,
    comment: 400,
    createdAt: new Date(),
  },
  {
    uid: 1,
    image_user:
      'https://antimatter.vn/wp-content/uploads/2022/06/hinh-anh-nguoi-yeu.jpg',
    name_user: 'Đỗ Chi',
    content:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    list_photo: [
      {
        id: 0,
        image_url:
          'https://images.unsplash.com/photo-1602206304384-428fc5a49a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      },
      {
        id: 1,
        image_url:
          'https://media.istockphoto.com/id/606207732/photo/rain-drops-on-window-with-road-light-bokeh.webp?s=170667a&w=0&k=20&c=KyykhoPXbxDlz2q--yqs7w4jhuXx2jZFO43hvc3dRF0=',
      },
      {
        id: 2,
        image_url:
          'https://images.unsplash.com/photo-1604893802731-d290d2e1afe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
      },
      {
        id: 3,
        image_url:
          'https://images.unsplash.com/photo-1602206304384-428fc5a49a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      },
      {
        id: 4,
        image_url:
          'https://binhminhdigital.com/StoreData/images/PageData/mot-so-van-de-ban-can-luu-y-khi-chup-anh-cho-nguoi-gia-BinhMinhDigital1.jpg',
      },
      {
        id: 5,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxUbpNAvXm9DUEqVdbl9sM-nT7vgcdDwikwDhcfD6KCv2ga83Hz_-hYVrDzfpNnII67U&usqp=CAU',
      },
    ],
    like: 500,
    comment: 40,
    createdAt: '2023-09-08T17:15:16.402Z',
  },
];
const Post = () => {
  const renderItemPost = ({item}) => {
    return (
      <ItemPost
        image_user={item.image_user}
        name_user={item.name_user}
        content={item.content}
        list_photo={item.list_photo}
        like={item.like}
        comment={item.comment}
        createdAt={item.createdAt}
      />
    );
  };
  if (fakeData.length === 0) {
    return (
      <Text style={styles.txt_no_news_feed}>
        You have read all the articles!
      </Text>
    );
  }
  return (
    <FlatList
      data={fakeData}
      renderItem={renderItemPost}
      keyExtractor={item => item.uid}
      showsVerticalScrollIndicator={false}
      style={styles.cardPost}
    />
  );
};
const styles = StyleSheet.create({
  cardPost: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  txt_no_news_feed: {
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
    color: '#3b3b3b',
    fontSize: 14,
    textAlign: 'center',
  },
});
export default Post;
