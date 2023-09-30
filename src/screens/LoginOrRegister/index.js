import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ILLUSTRANTION from '../../assets/images/onboarding-3.svg';
import ButtonCustom from '../../components/Button';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../utils/Screen';
import Login from '../../components/Login';
import Register from '../../components/Register';
const LoginOrRegister = () => {
  const [isVisibleLogin, setIsVisibleLogin] = useState(false);
  const onCloseLogin = () => {
    setIsVisibleLogin(!isVisibleLogin);
  };
  const [isVisibleRegister, setIsVisibleRegister] = useState(false);
  const onCloseRegister = () => {
    setIsVisibleRegister(!isVisibleRegister);
  };
  return (
    <View style={styles.container}>
      <ILLUSTRANTION width={400} height={HEIGHT_SCREEN < 700 ? 350 : 400} />
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Join the HobbyHub Community</Text>
      </View>
      <View style={styles.cardBtn}>
        {/* Btn create account */}
        <ButtonCustom
          onPress={onCloseRegister}
          title="Create Account"
          styleText={{
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Poppins-Bold',
          }}
          style={{width: WIDTH_SCREEN * 0.6, height: 50, borderRadius: 15}}
        />
        {/* Btn Login */}
        <TouchableOpacity style={styles.btnLogin} onPress={onCloseLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* Card Login */}
      <Login
        isVisible={isVisibleLogin}
        onCloseLogin={onCloseLogin}
        onCloseRegister={onCloseRegister}
      />
      {/* Card Register */}
      <Register
        isVisible={isVisibleRegister}
        onCloseRegister={onCloseRegister}
        onCloseLogin={onCloseLogin}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  cardTitle: {
    width: WIDTH_SCREEN * 0.6,
  },
  title: {
    marginTop: 25,
    fontFamily: 'PoetsenOne-Regular',
    color: '#3b3b3b',
    fontSize: 20,
    textAlign: 'center',
  },
  cardBtn: {
    marginTop: 25,
    rowGap: 20,
  },
  btnLogin: {
    width: WIDTH_SCREEN * 0.6,
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#050522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#050522',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});
export default LoginOrRegister;
