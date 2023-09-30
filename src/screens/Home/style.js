import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  controllers: {
    flexDirection: 'row',
    columnGap: 20,
  },
  cardStory: {
    width: '100%',
    height: 90,
    marginTop: 25,
    borderBottomWidth: 1,
    borderColor: '#3b3b3b1A',
  },
});
export default styles;
