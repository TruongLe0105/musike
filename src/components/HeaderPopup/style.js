import {StyleSheet} from 'react-native';

const COLORS = {icon: '#292929'};

const styles = StyleSheet.create({
  headerProfile: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  profileBg: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  avtWrap: {
    position: 'relative',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 22,
    marginVertical: 12,
  },
  circle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  avt: {
    resizeMode: 'contain',
    width: 65,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 12,
    width: 30,
    height: 30,
    backgroundColor: COLORS.icon,
    borderRadius: 50,
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
