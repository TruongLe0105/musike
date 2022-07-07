import {StyleSheet} from 'react-native';

const COLORS = {red: '#FF344A', icon: '#292929'};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(41, 41, 41, 0.75)',
    paddingHorizontal: 16,
  },
  headerProfile: {
    position: 'relative',
    width: '100%',
    height: 96,
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 27,
  },
  avtWrap: {
    position: 'relative',
    width: 79,
    height: 79,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 22,
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
    width: 72,
  },
  profileBg: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 10,
    width: 30,
    height: 30,
    backgroundColor: COLORS.icon,
    borderRadius: 50,
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 17,
  },
  label: {
    color: 'white',
    fontSize: 15,
    marginBottom: 20,
  },
  textInput: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    paddingLeft: 8,
    marginBottom: 20,
    fontSize: 15,
  },
  saveButton: {
    width: 140,
    height: 56,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#979797',
    opacity: 0.65,
    marginVertical: 20,
  },
  optionsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  optionsList: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 25,
  },
  optionsItem: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsText: {
    color: COLORS.red,
    fontSize: 13,
  },
});
export default styles;
