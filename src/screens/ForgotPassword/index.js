import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import CustomInput from '../../components/CustomInput';
import ButtonCustom from '../../components/Button';

const ForgotPassword = () => {
  const [textEmailOrPhone, setTextEmailOrPhone] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HobbyHub.</Text>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subTitle}>
          Opps. It happens to the best of us. Input your email address to fix
          the issue.
        </Text>
      </View>
      <CustomInput
        style={styles.inputEmailOrPhone}
        value={textEmailOrPhone}
        onChangeText={text => setTextEmailOrPhone(text)}
        title="email/phone"
      />
      {/* Btn Submit */}
      <View style={styles.cardBtnSubmit}>
        <ButtonCustom
          title="Submit"
          style={styles.btnSubmit}
          styleText={styles.txtBtnSubmit}
          disabled={!textEmailOrPhone}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
