import {StyleSheet} from 'react-native';
const btnStyle = {
  paddingLeft: 25,
  paddingVertical: 10,
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 10,
  opacity: 0.7,
};
const txtBtnstyle = {
  color: '#000',
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
};
const switchStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 15,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header_title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  header_top_left: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  btn_post: {
    width: 45,
    height: 45,
    backgroundColor: '#f5f5f5',
    borderRadius: 100,
    elevation: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  image_user: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  text_input_caption: {
    backgroundColor: '#fbfbfb',
    width: 200,
    maxHeight: 250,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 10,
    lineHeight: 25,
  },
  image_post: {
    width: 70,
    height: 100,
    borderRadius: 15,
  },
  controller_1: {
    borderTopWidth: 1,
    borderColor: '#f4f4f4',
    marginTop: 50,
  },
  controller_2: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f4f4f4',
    padding: 20,
  },
  btn_tag_people: {
    ...btnStyle,
  },
  btn_add_location: {
    ...btnStyle,
  },
  txt_tag_people: {...txtBtnstyle},
  txt_add_location: {...txtBtnstyle},
  title_also_post: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginVertical: 5,
  },
  title_facebook: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  title_instagram: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  sw_instagram: {...switchStyle},
  sw_facebook: {...switchStyle},
  btn_advanced_settings: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  txt_btn_advanced_settings: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
export default styles;
