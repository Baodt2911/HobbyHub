import React, {useEffect, useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import AddTus from '../../screens/AddTus';
import Profile from '../../screens/Profile';
import {WIDTH_SCREEN} from '../../utils/Screen';
import IconCustom from '../IconCustom';
import {Keyboard, Platform} from 'react-native';
const renderScene = SceneMap({
  home: Home,
  search: Search,
  addTus: AddTus,
  categories: Profile,
  profile: Profile,
});

export default function TabViewer() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', title: ''},
    {key: 'search', title: ''},
    {key: 'addTus', title: ''},
    {key: 'categories', title: ''},
    {key: 'profile', title: ''},
  ]);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => setIsKeyboardOpen(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => setIsKeyboardOpen(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const renderIcon = ({route, focused}) => <IconCustom name={route.key} />;
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#3b3b3b4d',
        height: 2,
      }}
      style={{
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#f4f4f41A',
      }}
      renderIcon={renderIcon}
      onTabPress={({route}) => {
        props.jumpTo(route.key);
      }}
    />
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={isKeyboardOpen ? () => null : renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: WIDTH_SCREEN}}
      style={{backgroundColor: '#fff'}}
      tabBarPosition="bottom"
    />
  );
}
