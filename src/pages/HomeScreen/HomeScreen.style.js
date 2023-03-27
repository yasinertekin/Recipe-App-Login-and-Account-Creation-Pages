import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  image: {
    bottom: 25,
    margin: 10,
    height: 200,
    width: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 13,
    padding: 5,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  },
  button: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
