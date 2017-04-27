import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

var { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  ImageTextContainer: {
    //borderWidth: 3,
    margin: 10,
    backgroundColor: 'white',
  },
  bigContainer: {
    margin: 10,
  },
  smallContainer: {
    marginBottom: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 2,
    backgroundColor: '#F0F0F0',
    flex: 1,
    marginHorizontal: 5,
  },
  loadingImage: {
    height: width / 3,
    width: width / 2,
    resizeMode: Image.resizeMode.contain,
  },
  loadingContainer: {
    padding: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    fontSize: width / 30,
    color: '#A3A3A3',
    fontWeight: 'bold',
  },
  BigImage: {
    flex: 1,
    height: Dimensions.get('window').height / 4,
    resizeMode: Image.resizeMode.cover,
  },
  smallImage: {
    flex: 0,
    margin: 10,
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
  },
  listView: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bigTextView: {
    fontSize: 20,
    marginTop: Dimensions.get('window').height / 4 - 30,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  smallTextView: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;