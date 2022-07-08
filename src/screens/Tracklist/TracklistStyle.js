import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapperComponent: {
    backgroundColor: '#171717',
    paddingTop: 30,
    paddingBottom: 99,
    height: '100%',
  },
  header: {
    marginLeft: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    color: '#D8D8D8',
    marginLeft: 9,
  },
  wrapperOption: {
    marginLeft: 41,
    marginRight: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 23,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textOption: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter',
    lineHeight: 18,
    color: '#FFFFFF',
  },
  togglebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 13,
    width: 40,
  },
  tracklist: {
    position: 'absolute',
    right: 0,
  },
  switchOff: {
    borderWidth: 1.3,
    borderRadius: 15,
    width: 40,
    height: 25,
    backgroundColor: 'gray',
  },
  ovalOff: {
    position: 'absolute',
    left: 0,
  },
  oval: {
    position: 'absolute',
    right: 0,
  },
  wrapperItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: '#B3B3B3',
    position: 'absolute',
    right: 50,
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    opacity: 0.1,
    marginTop: 14,
    marginLeft: 10,
  },
});
