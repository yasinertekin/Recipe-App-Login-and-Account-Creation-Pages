import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeScreen.style';
import Button from '../../components/Button/Button';

function HomeScreen({navigation}) {
  const SignUpScreen = () => {
    navigation.navigate('SignUp');
  };
  const LoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  const url = 'https://i.hizliresim.com/7yrp16m.jpg';

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: url}} />
      <Text style={styles.title}>
        Master the art of home cooking like a pro with our expert tips
      </Text>
      <Text style={styles.text}>
        Become a part of the largest cooking community in the world! Whether
        you're looking to learn new recipes or share your own creations, we've
        got you covered.
      </Text>
      <View style={styles.button}>
        <Button text={'Sign Up'} onPress={SignUpScreen} />
        <Button text={'Login'} onPress={LoginScreen} />
      </View>
    </View>
  );
}

export default HomeScreen;
