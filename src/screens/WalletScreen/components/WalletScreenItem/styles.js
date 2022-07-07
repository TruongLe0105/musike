import {StyleSheet} from 'react-native';

const COLOR = {black: '#979797', red: '#FF344A'};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(41, 41, 41, 0.75)',
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  line: {
    backgroundColor: COLOR.black,
    width: '100%',
    height: 0.5,
    marginVertical: 17,
  },
  textInput: {
    backgroundColor: 'white',
    height: 37,
    fontSize: 14,
    borderRadius: 5,
    color: 'black',
    marginBottom: 17,
  },
  label: {
    color: 'white',
    fontSize: 13,
    marginBottom: 8,
  },
  redText: {
    color: COLOR.red,
  },
  friend: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 9,
    marginBottom: 17,
  },
  textMethod: {
    color: 'white',
    fontSize: 13,
    textAlign: 'left',
    lineHeight: 28,
  },
  textDetail: {
    lineHeight: 28,
    color: 'white',
    fontSize: 13,
    textAlign: 'right',
  },
  methodList: {
    marginRight: 'auto',
  },
  footer: {
    flexDirection: 'row',
  },
});

export default styles;
