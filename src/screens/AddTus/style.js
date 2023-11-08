import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../utils/Screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
  },
  header_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 20,
  },
  image_post: {
    width: WIDTH_SCREEN - 40,
    height: WIDTH_SCREEN - 40,
    alignSelf: 'center',
    borderRadius: 25,
  },
  footer: {
    flex: 1,
  },
});
export default styles;
