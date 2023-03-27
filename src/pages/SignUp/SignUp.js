import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import styles from '../SignUp/SignUp.stlye';
import CheckBox from '../../components/CheckBox';
function SignUp({navigation}) {
  const onPress = () => {
    navigation.navigate('LoginScreen');
  };
  const url = 'https://i.hizliresim.com/rff14vc.png';

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.text}>
          Realize your dream of becoming a creative chef by stepping into the
          kitchen!
        </Text>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <View style={styles.check}>
          <CheckBox text="I agree to the terms and conditions" />
        </View>
        <Button text={'Create Your Free Account'} onPress={onPress} />
        <Image source={{uri: url}} style={styles.image} />
      </View>
    </View>
  );
}

export default SignUp;
