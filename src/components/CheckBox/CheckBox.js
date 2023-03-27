import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import styles from './CheckBox.style';

const Checkbox = ({text}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheckbox}>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          {isChecked && <View style={styles.checkmark} />}
        </View>
        <Text style={styles.label}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
