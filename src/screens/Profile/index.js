import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import BACK_ICON from '../../assets/icons/arrow-left.svg';
import OPTIONS_ICON from '../../assets/icons/options.svg';
import Post from '../../components/Post';
import VirtualizedScrollView from '../../components/VirtualizedScrollView';
import BottomSheet from '../../utils/BottomSheet';
import EDIT_ICON from '../../assets/icons/edit.svg';
import {HEIGHT_SCREEN} from '../../utils/Screen';
import ViewAvatar from '../../components/ViewAvatar';
import {launchImageLibrary} from 'react-native-image-picker';
const Profile = () => {
  const [isVisibleSetting, setIsVisibleSetting] = useState(false);
  const [urlAvatar, setUrlAvatar] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const onCloseViewAvatar = () => {
    setUrlAvatar(null);
  };
  const onOpenLibraryPhoto = async () => {
    const result = await launchImageLibrary();
    console.log(result);
  };
  return (
    <VirtualizedScrollView style={styles.container}>
      {/* Background cover */}
      <TouchableOpacity onPress={() => console.log('Select image cover')}>
        <ImageBackground
          source={{
            uri: 'https://inkythuatso.com/uploads/thumbnails/800/2022/04/anh-bia-mau-hong1-1536x1024-04-23-04-11.jpg',
          }}
          resizeMode="cover"
          style={styles.image_cover}>
          {/* Layer image  */}
          <View style={styles.layer_image}>
            {/* Button back  */}
            <TouchableOpacity style={styles.btn_back}>
              <BACK_ICON width={30} height={30} />
            </TouchableOpacity>
            {/* Button setting  */}
            <TouchableOpacity
              style={styles.btn_options}
              onPress={() => setIsVisibleSetting(!isVisibleSetting)}>
              <OPTIONS_ICON width={30} height={30} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      {/* Main */}
      <View style={styles.main_infor}>
        {/* Header infor  */}
        <View style={styles.header_infor}>
          {/* Follower */}
          <View style={styles.card_follow}>
            <Text style={styles.number_follow}>1000</Text>
            <Text style={styles.title_follow}>Followers</Text>
          </View>
          {/* Avatar */}
          <TouchableOpacity
            style={styles.btn_view_avatar}
            onPress={() =>
              setUrlAvatar(
                'https://i.pinimg.com/originals/b4/a9/c1/b4a9c107c272dc09885157183d2bfd14.jpg',
              )
            }>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/b4/a9/c1/b4a9c107c272dc09885157183d2bfd14.jpg',
              }}
              style={styles.avatar}
            />
            {/* btn edit avatar  */}
            <TouchableOpacity
              style={styles.btn_edit_avatar}
              onPress={onOpenLibraryPhoto}>
              <EDIT_ICON width={20} height={20} />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* View avatar  */}
          <ViewAvatar
            url={urlAvatar}
            isVisible={!!urlAvatar}
            onCloseViewAvatar={onCloseViewAvatar}
          />
          {/* Following */}
          <View style={styles.card_follow}>
            <Text style={styles.number_follow}>900</Text>
            <Text style={styles.title_follow}>Following</Text>
          </View>
        </View>
        {/* Name & bio */}
        <View style={styles.nameAndBio}>
          <Text style={styles.name_infor}>Baodt2911</Text>
          <Text style={styles.bio}>tao la baodt2911</Text>
        </View>
        {/* Hobbies  */}
        <View style={styles.card_hobby}>
          <Text style={styles.title_hobby}>___Hobbies___</Text>
          <View style={styles.list_hobbies}>
            <TouchableOpacity style={styles.btn_item_hobby}>
              <Text style={styles.txt_btn_item_hobby}>Reading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_item_hobby}>
              <Text style={styles.txt_btn_item_hobby}>Traveling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_item_hobby}>
              <Text style={styles.txt_btn_item_hobby}>
                Watching Movies or TV Shows
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Controller Profile  */}
        <View style={styles.card_controllers}>
          {/* Button follow  */}
          <TouchableOpacity style={styles.btn_follow}>
            <Text style={styles.txt_follow}>Follow</Text>
          </TouchableOpacity>
          {/* Button message */}
          <TouchableOpacity style={styles.btn_message}>
            <Text style={styles.txt_message}>Message</Text>
          </TouchableOpacity>
        </View>
        {/* You Post  */}
        <View style={styles.card_post}>
          <Text style={styles.title_post}>You Post</Text>
          <Post />
        </View>
        <BottomSheet
          heightPercent={0.5}
          isVisible={isVisibleSetting}
          onCloseBottomSheet={() => setIsVisibleSetting(!isVisibleSetting)}>
          <Text>Hello</Text>
        </BottomSheet>
      </View>
    </VirtualizedScrollView>
  );
};

export default Profile;
