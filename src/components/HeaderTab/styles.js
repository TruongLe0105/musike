import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 24,
  },
  prevIcon: {
    resizeMode: 'contain',
    width: 24,
    marginRight: 16,
  },
  headerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 58,
  },
  headerTabContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avtWrap: {
    position: 'relative',
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avtBorder: {
    width: 42,
    height: 42,
    opacity: 0.4,
    backgroundColor: '#fff',
  },
  avt: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 38,
  },
  logo: {
    resizeMode: 'contain',
    width: 101,
  },
});

export default styles;
