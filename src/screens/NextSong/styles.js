import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapperScreen: {
    backgroundColor: '#131313',
    height: '100%',
  },
  autoplay: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
  },
  container: {
    flexDirection: 'column',
    marginTop: 11,
  },
  itemContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#535353',
    marginTop: 7,
  },
  item: {
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 33,
    paddingRight: 28,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
  hideImage: {
    display: 'none',
  },
  viewImage: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    height: '100%',
  },
});
