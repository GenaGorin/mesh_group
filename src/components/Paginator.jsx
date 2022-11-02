import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Paginator = ({isActive, changeCallback, page}) => {
  return (
    <TouchableOpacity
      style={isActive ? paginatorStyle.pageActive : paginatorStyle.page}
      key={page}
      onPress={() => changeCallback(page)}>
      <Text key={page}>{page}</Text>
    </TouchableOpacity>
  );
};

export default Paginator;

const paginatorStyle = StyleSheet.create({
  pageActive: {
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 6,
    borderRadius: 15,
  },
  page: {padding: 3},
});
