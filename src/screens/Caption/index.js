import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import PREVIOUS_ICON from '../../assets/icons/arrow-left-2.svg';
import SEND_ICON from '../../assets/icons/send.svg';
import USER_ADD_ICON from '../../assets/icons/user-add.svg';
import LOCATION_ICON from '../../assets/icons/location.svg';
import SETTING_ICON from '../../assets/icons/setting.svg';
import {useNavigation} from '@react-navigation/native';
const Caption = () => {
  const navigation = useNavigation();
  const [isEnabledFacebook, setIsEnableFacebook] = useState(false);
  const toggleSwitchFacebook = () => {
    setIsEnableFacebook(!isEnabledFacebook);
  };
  const [isEnabledInstagram, setIsEnableInstagram] = useState(false);
  const toggleSwitchInstagram = () => {
    setIsEnableInstagram(!isEnabledInstagram);
  };
  return (
    <View style={styles.container}>
      {/* header-top */}
      <View style={styles.header_top}>
        <View style={styles.header_top_left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <PREVIOUS_ICON />
          </TouchableOpacity>
          <Text style={styles.header_title}>New Post</Text>
        </View>
        {/* Btn Post  */}
        <TouchableOpacity style={styles.btn_post}>
          <SEND_ICON />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        {/* caption  */}
        <View style={styles.caption}>
          {/* image user  */}
          <Image
            source={{
              uri: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/02/gojo-satoru-cosplay.jpg',
            }}
            resizeMode="cover"
            style={styles.image_user}
          />

          <TextInput
            placeholder="Write a caption"
            style={styles.text_input_caption}
            placeholderTextColor={'#393939cc'}
            multiline
          />
          {/* image post  */}
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/13/1f/cc/131fcc7b4b5857ac83a04ee04636f161.jpg',
            }}
            resizeMode="cover"
            style={styles.image_post}
          />
        </View>
        {/* controller 1  */}
        <View style={styles.controller_1}>
          {/* btn tag people */}
          <TouchableOpacity style={styles.btn_tag_people}>
            <USER_ADD_ICON />
            <Text style={styles.txt_tag_people}>Tag People</Text>
          </TouchableOpacity>
          {/* btn add location  */}
          <TouchableOpacity style={styles.btn_add_location}>
            <LOCATION_ICON />
            <Text style={styles.txt_add_location}>Add Location</Text>
          </TouchableOpacity>
        </View>
        {/* controller 2  */}
        <View style={styles.controller_2}>
          <Text style={styles.title_also_post}>Also post to</Text>
          <View style={styles.sw_facebook}>
            <Text style={styles.title_facebook}>Facebook</Text>
            <Switch
              trackColor={{false: '#3b3b3b4d', true: '#81b0ff'}}
              thumbColor={isEnabledFacebook ? '#0880FF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchFacebook}
              value={isEnabledFacebook}
            />
          </View>
          <View style={styles.sw_instagram}>
            <Text style={styles.title_instagram}>Instagram</Text>
            <Switch
              trackColor={{false: '#3b3b3b4d', true: '#81b0ff'}}
              thumbColor={isEnabledInstagram ? '#0880FF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchInstagram}
              value={isEnabledInstagram}
            />
          </View>
        </View>
        {/* Btn advanced setting  */}
        <TouchableOpacity style={styles.btn_advanced_settings}>
          <SETTING_ICON />
          <Text style={styles.txt_btn_advanced_settings}>
            Advanced Settings
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Caption;
