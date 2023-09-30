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
const Home = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const onRefreshNewsFeed = () => {
    setIsRefresh(!isRefresh);
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
          <TouchableOpacity>
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
        <Story />
      </View>
      {/* POST */}
      <Post />
    </VirtualizedScrollView>
  );
};

export default Home;
