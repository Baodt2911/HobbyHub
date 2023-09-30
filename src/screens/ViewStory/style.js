import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../utils/Screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939cc',
    justifyContent: 'space-between',
  },
  header: {
    paddingVertical: 10,
    rowGap: 15,
  },
  card_process: {},
  card_info: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  info_user: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  image_user: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name_user: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  time: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 10,
    letterSpacing: 1.2,
  },
  card_reaction: {
    width: '80%',
    height: 50,
    backgroundColor: '#323232cc',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  card_send_message: {
    width: '90%',
    height: 45,
    backgroundColor: '#323232cc',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  input_message: {
    width: WIDTH_SCREEN - 80,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
});
export default styles;
