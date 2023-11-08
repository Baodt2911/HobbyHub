import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  PanResponder,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './style';
import MORE_LINE_ICON from '../../assets/icons/more-line.svg';
import MESSAGE_ICON from '../../assets/icons/message.svg';
import LOVE_ICON from '../../assets/icons/love.svg';
import HAHA_ICON from '../../assets/icons/haha.svg';
import WOW_ICON from '../../assets/icons/wow.svg';
import SAD_ICON from '../../assets/icons/sad.svg';
import CARE_ICON from '../../assets/icons/care.svg';
import CLOSE_ICON from '../../assets/icons/close.svg';
import ProcessBarStory from '../ProcessBarStory';
import {HEIGHT_SCREEN} from '../../utils/Screen';
const MAX_UPWARD_TRANSLATE_Y = 0;
const MAX_DOWNWARD_TRANSLATE_Y = HEIGHT_SCREEN;
const DRAG_THRESHOLD = 150;
const ViewStory = ({image_user, name_user, isVisible, onCloseStory}) => {
  const translateValue_Y = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        translateValue_Y.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        translateValue_Y.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        lastGestureDy.current += gesture.dy;
        translateValue_Y.flattenOffset();
        if (gesture.dy > DRAG_THRESHOLD) {
          slideAnimation('down');
          onCloseStory();
        } else {
          slideAnimation('up');
        }
      },
    }),
  ).current;
  const slideAnimation = direction => {
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(translateValue_Y, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCloseStory}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          flex: 1,
          transform: [
            {
              translateY: translateValue_Y.interpolate({
                inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
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
              {/* Card controller */}
              <View style={styles.card_controller_header}>
                {/* Button more */}
                <TouchableOpacity>
                  <MORE_LINE_ICON fill="#fff" />
                </TouchableOpacity>
                {/* Button Close */}
                <TouchableOpacity onPress={onCloseStory}>
                  <CLOSE_ICON width={30} height={30} fill="#fff" />
                </TouchableOpacity>
              </View>
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
      </Animated.View>
    </Modal>
  );
};

export default ViewStory;
