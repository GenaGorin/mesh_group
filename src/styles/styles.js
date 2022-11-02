import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 25,
  },
});

export const driverItem = StyleSheet.create({
  wrapper: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const raceItem = StyleSheet.create({
  wrapper: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
  },
  resultWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
