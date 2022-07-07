import {StyleSheet} from 'react-native';

const COLORS = {red: '#FF344A', icon: '#292929'};

const styles = StyleSheet.create({
  headerItem: {
    marginTop: 27,
    marginBottom: 46,
    borderRadius: 10,
    overflow: 'hidden',
  },
  headerProfile: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(41, 41, 41, 0.75)',
    paddingHorizontal: 16,
    paddingVertical: 25,
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
  profileBg: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
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
  closeImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
  },
  form: {
    marginTop: 17,
  },
  textInput: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    paddingLeft: 8,
    fontSize: 16,
    marginVertical: 15,
  },
  saveButton: {
    width: 116,
    height: 46,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 2,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 17,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#979797',
    opacity: 0.65,
    marginVertical: 17,
  },
  optionsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  optionsList: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between',
  },
  optionsText: {
    color: COLORS.red,
    fontSize: 13,
  },
  textInputWrap: {
    position: 'relative',
  },
  showWallet: {
    position: 'absolute',
    right: 10,
    top: 22,
  },
});
export default styles;
