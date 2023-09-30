import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  btnSkip: {
    width: '100%',
    alignItems: 'flex-end',
  },
  txtBtnSkip: {
    color: '#3b3b3b',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    color: '#3b3b3b',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 20,
  },
  cardHobbies: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    columnGap: 10,
    rowGap: 15,
  },
  btnFinish: {
    width: 150,
    height: 45,
    marginTop: 50,
    borderRadius: 8,
  },
  txtBtnFinish: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
export default styles;
