import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {driverItem} from '../styles/styles';

const DriverItem = ({driver}) => {
  const navigation = useNavigation();
  return (
    <View style={driverItem.wrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DriverScreen', {driver})}>
        <Text>{driver.givenName + ' ' + driver.familyName} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('RaceScreen', {driver})}>
        <Text>Таблица заездов</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverItem;
