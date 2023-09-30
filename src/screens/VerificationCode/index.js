import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import CustomInput from '../../components/CustomInput';
import ButtonCustom from '../../components/Button';
import {TextInput} from 'react-native';

const VerificationCode = () => {
  const [code, setCode] = useState({1: '', 2: '', 3: '', 4: ''});
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const OTP = Object.values(code).join('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HobbyHub.</Text>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Authy Verification</Text>
        <Text style={styles.subTitle}>
          Copy the verification code in your authy application to verify this
          account recovery
        </Text>
      </View>
      <View style={styles.cardOTP}>
        {/* First OTP */}
        <TextInput
          style={styles.itemInput}
          ref={firstInput}
          onChangeText={text => {
            setCode({...code, 1: text});
            text && secondInput.current.focus();
          }}
          keyboardType="numeric"
          maxLength={1}
          selectionColor={'#050522'}
        />
        {/* Second OTP */}
        <TextInput
          style={styles.itemInput}
          ref={secondInput}
          onChangeText={text => {
            setCode({...code, 2: text});
            text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
          keyboardType="numeric"
          maxLength={1}
          selectionColor={'#050522'}
        />
        {/* Third OTP */}
        <TextInput
          style={styles.itemInput}
          ref={thirdInput}
          onChangeText={text => {
            setCode({...code, 3: text});
            text ? fourthInput.current.focus() : secondInput.current.focus();
          }}
          keyboardType="numeric"
          maxLength={1}
          selectionColor={'#050522'}
        />
        {/* Fourth OTP */}
        <TextInput
          style={styles.itemInput}
          ref={fourthInput}
          onChangeText={text => {
            setCode({...code, 4: text});
            !text && thirdInput.current.focus();
          }}
          keyboardType="numeric"
          maxLength={1}
          selectionColor={'#050522'}
        />
      </View>
      {/* Btn Submit */}
      <View style={styles.cardBtnSubmit}>
        <ButtonCustom
          title="Submit verification"
          style={styles.btnSubmit}
          styleText={styles.txtBtnSubmit}
          disabled={!(OTP.length === 4)}
        />
      </View>
    </View>
  );
};

export default VerificationCode;
