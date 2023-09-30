import {FlatList} from 'react-native';
import React from 'react';
import ItemStory from '../ItemStory';
import AddStory from '../AddStory';
const fakeData = [
  {
    uid: 0,
    name_user: 'Baodt2911',
    image_user:
      'https://toigingiuvedep.vn/wp-content/uploads/2023/03/anh-nguoi-dep-trung-quoc.jpg',
  },
  {
    uid: 1,
    name_user: 'Chi2911ks',
    image_user:
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg',
  },
  {
    uid: 2,
    name_user: 'Tobi',
    image_user:
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-851-1620472406599.jpeg',
  },
  {
    uid: 3,
    name_user: 'Baodt2911',
    image_user:
      'https://toigingiuvedep.vn/wp-content/uploads/2023/03/anh-nguoi-dep-trung-quoc.jpg',
  },
  {
    uid: 4,
    name_user: 'Chi2911ks',
    image_user:
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg',
  },
  {
    uid: 5,
    name_user: 'Tobi',
    image_user:
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-851-1620472406599.jpeg',
  },
  {
    uid: 6,
    name_user: 'Baodt2911',
    image_user:
      'https://toigingiuvedep.vn/wp-content/uploads/2023/03/anh-nguoi-dep-trung-quoc.jpg',
  },
  {
    uid: 7,
    name_user: 'Chi2911ks',
    image_user:
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg',
  },
  {
    uid: 8,
    name_user: 'Tobi',
    image_user:
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-851-1620472406599.jpeg',
  },
];
const Story = () => {
  const renderItemStory = ({item}) => {
    if (item.uid === 0) {
      return <AddStory />;
    }
    return (
      <ItemStory
        uid={item.uid}
        image_user={item.image_user}
        name_user={item.name_user}
      />
    );
  };
  return (
    <FlatList
      data={fakeData}
      renderItem={renderItemStory}
      keyExtractor={item => item.uid}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 25, columnGap: 20}}
    />
  );
};

export default Story;
