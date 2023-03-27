import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    margin: 10,
    fontSize: 13,
    color: 'gray',
  },
  bodyContainer: {
    marginBottom: 30,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    height: 100,
    width: 150,
    resizeMode: 'contain',
    marginTop: 60,
    alignSelf: 'center',
    borderRadius: 75,
    backgroundColor: '#fff',
  },
  check: {
    marginTop: 10,
    marginLeft: 10,
  },
});
