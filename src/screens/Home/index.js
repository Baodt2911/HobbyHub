import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import NOTIFICATION_ICON from '../../assets/icons/notification.svg';
import CHAT_ICON from '../../assets/icons/chat.svg';
import Story from '../../components/Story';
import Post from '../../components/Post';
import VirtualizedScrollView from '../../components/VirtualizedScrollView';
import Logo from '../../components/Logo';
import ViewStory from '../../components/ViewStory';
import Comments from '../../components/Comments';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [isRefresh, setIsRefresh] = useState(false);
  const [isVisibleStory, setIsVisibleStory] = useState(false);
  const onRefreshNewsFeed = () => {
    setIsRefresh(!isRefresh);
  };
  const onOpenStory = () => {
    setIsVisibleStory(!isVisibleStory);
  };
  const [isVisibleComments, setIsVisibleComments] = useState(false);
  const onOpenComments = () => {
    setIsVisibleComments(!isVisibleComments);
  };
  return (
    <VirtualizedScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isRefresh} onRefresh={onRefreshNewsFeed} />
      }>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo */}
        <Logo />
        <View style={styles.controllers}>
          {/* Button notification */}
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <NOTIFICATION_ICON />
          </TouchableOpacity>
          {/* Button Chat */}
          <TouchableOpacity>
            <CHAT_ICON />
          </TouchableOpacity>
        </View>
      </View>
      {/* Story */}
      <View style={styles.cardStory}>
        <Story onOpenStory={onOpenStory} />
        <ViewStory isVisible={isVisibleStory} onCloseStory={onOpenStory} />
      </View>
      {/* POST */}
      <Post onOpenComments={onOpenComments} />
      <Comments
        isVisible={isVisibleComments}
        onCloseComments={onOpenComments}
      />
    </VirtualizedScrollView>
  );
};

export default Home;
