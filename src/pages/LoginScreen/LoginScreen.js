import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import Lottie from 'lottie-react-native';
import styles from './LoginScreen.style';
import CheckBox from '../../components/CheckBox';

function LoginScreen({navigation}) {
  const source = require('../../assets/helloWorld.json');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.text}>welcome back!</Text>

      <Input placeholder={'email'} />
      <Input placeholder={'password'} />

      <View style={styles.body}>
        <CheckBox text={'Remember me'} />
        <TouchableOpacity>
          <Text style={styles.password}> Forgot password? </Text>
        </TouchableOpacity>
      </View>

      <Button text={'Log in'} />

      <Lottie
        source={source}
        autoPlay
        loop
        style={{width: 100, height: 100, alignSelf: 'center'}}
      />
    </View>
  );
}
export default LoginScreen;
