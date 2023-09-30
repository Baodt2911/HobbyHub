import {StyleSheet} from 'react-native';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../utils/Screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  logo: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  cardTitle: {
    width: '100%',
    marginTop: 25,
  },
  title: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
  },
  subTitle: {
    color: '#393939',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  form: {
    width: '100%',
    rowGap: 30,
    marginTop: 50,
  },
  itemInput: {
    width: '100%',
    height: 60,
    borderRadius: 10,
  },
  cardBtnSubmit: {
    width: '100%',
    alignItems: 'center',
    marginTop: HEIGHT_SCREEN * 0.15,
  },
  btnSubmit: {
    width: 250,
    height: 50,
    borderRadius: 8,
  },
  txtBtnSubmit: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
});
export default styles;
