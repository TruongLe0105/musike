import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#212121',
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
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageCircle: {
    position: 'absolute',
    width: '100%',
    // height: '100%',
    top: 0,
    // bottom: 0,
  },
  logo: {
    position: 'absolute',
    left: '25%',
    top: '40%',
    width: 201,
    height: 72,
  },
  toast: {
    backgroundColor: '#ffffffcf',
    paddingVertical: 25,
    // fontSize: 14,
    paddingHorizontal: 25,
    // textAlign: 'center',
    borderRadius: 15,
  },
  wrapperFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 13,
    marginRight: 30,
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFooter: {
    color: '#FF344A',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
  },
});

export default styles;
