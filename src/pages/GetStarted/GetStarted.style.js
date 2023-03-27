import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#fff',
  },
  image: {
    bottom: 25,
    margin: 10,
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 1.5,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
});
