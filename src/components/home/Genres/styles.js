import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  wrapperGenres: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 12,
  },
  itemAction: {
    backgroundColor: '#FF4060',
    borderColor: '#FF344A',
    borrderWidth: 0.73,
    borderRadius: 40,
    margin: 10,
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    backgroundColor: '#202020',
    borderWidth: 0.73,
    borderColor: '#FF344A',
    borderRadius: 50,
    margin: 10,
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreAction: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  genre: {
    color: '#FF4060',
    fontWeight: '400',
  },
});

export default styles;
