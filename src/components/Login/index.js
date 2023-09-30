/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style';
import CustomInput from '../CustomInput';
import ICON_EYE from '../../assets/icons/eye.svg';
import ICON_EYE_OFF from '../../assets/icons/eye-off.svg';
import ButtonCustom from '../Button';
import {useNavigation} from '@react-navigation/native';

const Login = ({isVisible, onCloseLogin, onCloseRegister}) => {
  const navigation = useNavigation();

  const [textEmailOrPhone, setTextEmailOrPhone] = useState();
  const [textPassword, setTextPassword] = useState();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const validateEmail = () => {
    const rgxEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return rgxEmail.test(textEmailOrPhone) || !textEmailOrPhone;
  };
  const validatePassword = () => {
    const rgxPassword =
      /^(?=\S*[A-Z])(?=\S*[!@#$%^&*])(?=\S*[0-9])(?=\S*[a-z])\S{8,}$/;
    return rgxPassword.test(textPassword) || !textPassword;
  };
  const handleLogin = () => {};
  return (
    <Modal
      style={{flex: 1}}
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => onCloseLogin()}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <TouchableOpacity onPress={onCloseLogin} style={{flex: 1}} />
          <View style={styles.main}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
              {/* Email/Phone */}
              <View>
                <CustomInput
                  style={styles.inputEmailOrPhone}
                  value={textEmailOrPhone}
                  onChangeText={text => setTextEmailOrPhone(text)}
                  title="email/phone"
                />
                {validateEmail() ? (
                  <></>
                ) : (
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: '#EF5858',
                      fontSize: 10,
                      marginTop: 5,
                    }}>
                    Please enter a valid email address!
                  </Text>
                )}
              </View>
              <View>
                <CustomInput
                  style={styles.inputPassword}
                  value={textPassword}
                  onChangeText={text => setTextPassword(text)}
                  title="password"
                  ICON={isShowPassword ? ICON_EYE : ICON_EYE_OFF}
                  secureTextEntry={!isShowPassword}
                  onPressICON={onShowPassword}
                />
                {validatePassword() ? (
                  <></>
                ) : (
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: '#EF5858',
                      fontSize: 10,
                      marginTop: 5,
                    }}>
                    Please enter atleast 8 character with number, symbol,
                    capital and small letter!
                  </Text>
                )}
              </View>
            </View>
            {/* Forgot password */}
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.txtForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* Btn Login */}
            <ButtonCustom
              title="Login"
              style={styles.btnLogin}
              styleText={styles.txtBtnLogin}
              disabled={
                !validateEmail() ||
                !validatePassword() ||
                !textEmailOrPhone ||
                !textPassword
              }
              onPress={handleLogin}
            />
            {/* navigate Register */}
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#050522',
                }}>
                Don’t have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  onCloseLogin();
                  onCloseRegister();
                }}>
                <Text
                  style={{
                    color: '#EF5858',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 14,
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default Login;
