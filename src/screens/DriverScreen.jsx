import {Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GoBack from '../components/GoBack';
import {appStyles} from '../styles/styles';

const DriverScreen = ({route}) => {
  const driver = route.params.driver;

  return (
    <View style={appStyles.container}>
      <GoBack />
      <Text style={appStyles.title}>
        {driver.givenName + ' ' + driver.familyName}
      </Text>
      <Text>Дата рождения: {driver.dateOfBirth}</Text>
      <Text>Национальность: {driver.nationality} </Text>
      <TouchableOpacity onPress={() => Linking.openURL(driver.url)}>
        <Text style={{color: '#346eeb'}}>Биография</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverScreen;
