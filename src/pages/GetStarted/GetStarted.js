import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './GetStarted.style';
import Lottie from 'lottie-react-native';

function GetStarted({navigation}) {
  const onPress = () => {
    navigation.navigate('HomeScreen');
  };
  const source = require('../../assets/hello.json');

  const url = 'https://i.hizliresim.com/cg84vpn.png';

  return (
    <View style={styles.container}>
      <Lottie
        source={source}
        autoPlay
        loop
        style={{width: 300, height: 300, alignSelf: 'center'}}
      />
      <Text style={styles.text}>
        Join us today and receive 3 unique rewards
      </Text>

      <Button text="Get Started" onPress={onPress} />
    </View>
  );
}

export default GetStarted;
