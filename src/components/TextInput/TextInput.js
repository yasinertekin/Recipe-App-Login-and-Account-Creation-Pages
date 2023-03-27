import React from 'react';
import {Text, TextInput} from 'react-native';
import styles from './TextInput.style';

function Input({placeholder}) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}

export default Input;
