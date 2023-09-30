import {StyleSheet} from 'react-native';
import {HEIGHT_SCREEN} from '../../utils/Screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939CC',
    justifyContent: 'flex-end',
  },
  main: {
    width: '100%',
    height: HEIGHT_SCREEN < 700 ? HEIGHT_SCREEN * 0.65 : HEIGHT_SCREEN * 0.6,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 15,
  },
  title: {
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    paddingTop: 30,
  },
  form: {
    width: '100%',
    rowGap: 25,
    marginTop: 30,
  },
  inputEmailOrPhone: {
    width: '100%',
    height: 60,
    borderRadius: 10,
  },
  inputPassword: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    paddingRight: 30,
  },
  txtForgotPassword: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'right',
    color: '#050522',
    marginTop: 10,
    letterSpacing: 0.5,
  },
  btnLogin: {
    width: '100%',
    height: 60,
    borderRadius: 15,
    marginTop: 20,
  },
  txtBtnLogin: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 20,
  },
});
export default styles;
