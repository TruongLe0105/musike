import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapperScreen: {
    backgroundColor: '#131313',
    height: '100%',
  },
  heading: {
    marginTop: 29,
    marginLeft: 33,
    marginRight: 25,
  },
  autoplay: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 25,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 10,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1.3,
    borderRadius: 9.5,
    width: 50,
    height: 20,
    borderColor: '#FFFFFF',
  },
  switchOn: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily: 'Inter',
    // lineHeight: 15,
  },
  circleOn: {
    backgroundColor: '#FF344A',
    width: 12,
    height: 12,
    borderRadius: 40,
  },
  circleOff: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: 12,
    height: 12,
    borderRadius: 40,
  },
  container: {
    flexDirection: 'column',
    marginTop: 11,
  },
  item: {
    marginTop: 7,
    marginLeft: 33,
    marginRight: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: '#535353',
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 10,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  song: {
    fontWeight: '600',
    color: '#FAFAFA',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: '#AFB6B3',
  },
  option: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  hideImage: {
    display: 'none',
  },
  viewImage: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    height: '100%',
  },
  ellipse: {
    width: '50%',
  },
});
