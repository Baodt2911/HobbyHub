import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import CustomInput from '../../components/CustomInput';
import ButtonCustom from '../../components/Button';
import ICON_EYE from '../../assets/icons/eye.svg';
import ICON_EYE_OFF from '../../assets/icons/eye-off.svg';
const ResetPassword = () => {
  const [textPassword, setTextPassword] = useState();
  const [textConfirmPassword, setTextConfirmPassword] = useState();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const validatePassword = () => {
    const rgxPassword =
      /^(?=\S*[A-Z])(?=\S*[!@#$%^&*])(?=\S*[0-9])(?=\S*[a-z])\S{8,}$/;
    return rgxPassword.test(textPassword) || !textPassword;
  };

  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const onShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.logo}>HobbyHub.</Text>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>Set new password</Text>
          <Text style={styles.subTitle}>
            Enter your new password below and check the hint while setting it.
          </Text>
        </View>
        <View style={styles.form}>
          {/* Input new Password */}
          <View>
            <CustomInput
              style={styles.itemInput}
              value={textPassword}
              onChangeText={text => setTextPassword(text)}
              title="new password"
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
                Please enter atleast 8 character with number, symbol, capital
                and small letter!
              </Text>
            )}
          </View>
          {/* Input confirm password */}
          <View>
            <CustomInput
              style={styles.itemInput}
              value={textConfirmPassword}
              onChangeText={text => setTextConfirmPassword(text)}
              title="confirm password"
              ICON={isShowConfirmPassword ? ICON_EYE : ICON_EYE_OFF}
              secureTextEntry={!isShowConfirmPassword}
              onPressICON={onShowConfirmPassword}
            />
            {textConfirmPassword === textPassword || !textConfirmPassword ? (
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
        {/* Btn Submit */}
        <View style={styles.cardBtnSubmit}>
          <ButtonCustom
            title="Submit password"
            style={styles.btnSubmit}
            styleText={styles.txtBtnSubmit}
            disabled={!textPassword}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ResetPassword;
