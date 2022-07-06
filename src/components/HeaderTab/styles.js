import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  prevIcon: {
    resizeMode: 'contain',
    width: 24,
    marginRight: 16,
  },
  headerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avtBorder: {
    position: 'relative',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avt: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 47,
    height: 47,
  },
});

export default styles;
