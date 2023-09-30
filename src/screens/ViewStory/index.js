import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './style';
import MORE_ICON from '../../assets/icons/more-2.svg';
import MESSAGE_ICON from '../../assets/icons/message.svg';
import LOVE_ICON from '../../assets/icons/love.svg';
import HAHA_ICON from '../../assets/icons/haha.svg';
import WOW_ICON from '../../assets/icons/wow.svg';
import SAD_ICON from '../../assets/icons/sad.svg';
import CARE_ICON from '../../assets/icons/care.svg';
import ProcessBarStory from '../../components/ProcessBarStory';
const ViewStory = ({image_user, name_user}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://rivertour.vn/wp-content/uploads/2019/09/1568366580_549_Son-Tung-M-TP-dang-anh-di-choi-trung-thu-o.jpeg',
      }}
      //   resizeMode="contain"
      style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Process */}
        <View style={styles.card_process}>
          <ProcessBarStory time={5000} number_part={1} />
        </View>
        {/* Info user  */}
        <View style={styles.card_info}>
          {/* Info User */}
          <View style={styles.info_user}>
            <Image
              source={{
                uri: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-851-1620472406599.jpeg',
              }}
              resizeMode="cover"
              style={styles.image_user}
            />
            <Text style={styles.name_user}>Baodt2911</Text>
            {/* Time */}
            <Text style={styles.time}>10m</Text>
          </View>
          {/* Button more */}
          <TouchableOpacity>
            <MORE_ICON fill="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom */}
      <View>
        {/* Reaction */}
        <View style={styles.card_reaction}>
          {/* Button react love */}
          <TouchableOpacity>
            <LOVE_ICON width={30} height={30} />
          </TouchableOpacity>
          {/* Button react haha */}
          <TouchableOpacity>
            <HAHA_ICON width={30} height={30} />
          </TouchableOpacity>
          {/* Button react care*/}
          <TouchableOpacity>
            <CARE_ICON width={30} height={30} />
          </TouchableOpacity>
          {/* Button react sad */}
          <TouchableOpacity>
            <SAD_ICON width={30} height={30} />
          </TouchableOpacity>
          {/* Button react wow */}
          <TouchableOpacity>
            <WOW_ICON width={30} height={30} />
          </TouchableOpacity>
        </View>
        {/* Send message */}
        <View style={styles.card_send_message}>
          <TextInput
            placeholder="Send a message"
            placeholderTextColor={'#fff'}
            style={styles.input_message}
          />
          <TouchableOpacity>
            <MESSAGE_ICON />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ViewStory;
