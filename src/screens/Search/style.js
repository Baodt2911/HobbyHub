import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../utils/Screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {marginTop: 20, marginBottom: 10},
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  search_input: {
    width: WIDTH_SCREEN - 20 - 65,
    color: '#393939',
    paddingLeft: 10,
    paddingRight: 15,
    fontFamily: 'Poppins-Regular',
  },
  cardListHobby: {
    height: 40,
  },
});
export default styles;
