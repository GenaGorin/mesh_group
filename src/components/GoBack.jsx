import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity} from 'react-native';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{display: 'flex', flexDirection: 'row'}}
      onPress={() => navigation.goBack()}>
      <Image source={require('../styles/images/goBack.png')} />
      <Text style={{marginTop: -3, marginLeft: 5, color: '#346eeb'}}>
        Назад
      </Text>
    </TouchableOpacity>
  );
};

export default GoBack;
