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
  cardBtnSubmit: {
    width: '100%',
    alignItems: 'center',
    marginTop: HEIGHT_SCREEN * 0.3,
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
  cardOTP: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
    marginTop: 50,
  },
  itemInput: {
    width: 56,
    height: 56,
    borderWidth: 1,
    color: '#050522',
    borderColor: '#050522',
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
  },
});
export default styles;
