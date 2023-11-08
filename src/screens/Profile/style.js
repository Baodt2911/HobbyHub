import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image_cover: {
    width: '100%',
    height: 100,
  },
  layer_image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: '#39393966',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btn_back: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#f4f4f4',
  },
  main_infor: {
    flex: 1,
    transform: [{translateY: -15}],
  },
  header_infor: {
    height: 100,
    backgroundColor: '#fff',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    shadowColor: '#333',
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: -2},
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn_view_avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    transform: [{translateY: -50}],
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  btn_edit_avatar: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 0},
      },
    }),
  },
  card_follow: {
    alignItems: 'center',
    marginTop: 20,
  },
  number_follow: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#000',
  },
  title_follow: {
    fontFamily: 'Poppins-Medium',
    color: '#3b3b3b',
    fontSize: 16,
  },
  nameAndBio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name_infor: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: '#000',
  },
  bio: {
    fontFamily: 'Poppins-Italic',
    color: '#3b3b3bcc',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  card_controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  btn_follow: {
    width: 150,
    height: 40,
    backgroundColor: '#43A2FA',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_message: {
    width: 150,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#f4f4f4',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  txt_follow: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
  txt_message: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  card_hobby: {},
  title_hobby: {
    color: '#3b3b3bcc',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  list_hobbies: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  btn_item_hobby: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#393939cc',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
    }),
  },
  txt_btn_item_hobby: {
    fontFamily: 'Poppins-Regular',
    color: '#393939CC',
    fontSize: 12,
  },
  card_post: {
    width: '100%',
    paddingTop: 25,
  },
  title_post: {
    fontFamily: 'Poppins-BoldItalic',
    color: '#000',
    fontSize: 18,
    marginLeft: 25,
  },
});
export default styles;
