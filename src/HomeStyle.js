import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#212121',
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  contentContainer: {
    flex: 3,
    alignItems: 'center',
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  actionRowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#aaa',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  column: {
    width: '100%',
    flexDirection: 'column',
  },
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1a1a1a',
  },
  image: {
    height: '100%',
    width: '100%',
    // marginTop: 15,
  },
  logo: {
    position: 'absolute',
    left: '25%',
    top: '40%',
    width: 201,
    height: 72,
  },
});

export default styles;
