import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 50,
    marginLeft: 20,
  },

  body: {
    flexDirection: 'row',
    left: 12,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    color: '#grey',
    marginLeft: 20,
    marginBottom: 10,
  },
  password: {
    fontSize: 12,
    color: '#20C060',
    marginRight: 20,
  },
  bottomContainer: {
    marginBottom: 0,
  },
});
