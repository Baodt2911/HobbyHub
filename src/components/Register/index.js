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

const Register = ({isVisible, onCloseRegister, onCloseLogin}) => {
  const [textEmailOrPhone, setTextEmailOrPhone] = useState();
  const [textPassword, setTextPassword] = useState();
  const [textConfirmPassword, setTextConfirmPassword] = useState();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const onShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
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
  return (
    <Modal
      style={{flex: 1}}
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => onCloseRegister()}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <TouchableOpacity onPress={onCloseRegister} style={{flex: 1}} />
          <View style={styles.main}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.form}>
              {/* Input Email/Phone */}
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
              {/* Input Password */}
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
              {/* Input confirm password */}
              <View>
                <CustomInput
                  style={styles.inputPassword}
                  value={textConfirmPassword}
                  onChangeText={text => setTextConfirmPassword(text)}
                  title="confirm password"
                  ICON={isShowConfirmPassword ? ICON_EYE : ICON_EYE_OFF}
                  secureTextEntry={!isShowConfirmPassword}
                  onPressICON={onShowConfirmPassword}
                />
                {textConfirmPassword === textPassword ||
                !textConfirmPassword ? (
                  <></>
                ) : (
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: '#EF5858',
                      fontSize: 10,
                      marginTop: 5,
                    }}>
                    Password incorrect!
                  </Text>
                )}
              </View>
            </View>
            {/* Btn Register */}
            <ButtonCustom
              title="Register"
              style={styles.btnRegister}
              styleText={styles.txtBtnRegister}
              disabled={
                !validateEmail() ||
                !validatePassword() ||
                !textEmailOrPhone ||
                !textPassword ||
                !(textConfirmPassword === textPassword)
              }
            />
            {/* navigate Login */}
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
                Already have account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  onCloseRegister();
                  onCloseLogin();
                }}>
                <Text
                  style={{
                    color: '#EF5858',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 14,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default Register;
