import {useEffect} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GoBack from '../components/GoBack';
import RaceItem from '../components/RaceItem';
import {getRaces} from '../redux/raceSlice';
import {appStyles} from '../styles/styles';

const RaceScreen = ({route}) => {
  const driver = route.params.driver;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRaces(driver.driverId));
  }, []);

  const races = useSelector(state => state.races.races);
  const isFetching = useSelector(state => state.races.isFetching);
  const error = useSelector(state => state.races.error);

  if (error) {
    return (
      <View style={appStyles.container}>
        <GoBack />
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={appStyles.container}>
      <GoBack />
      <Text style={appStyles.title}>
        Таблца заездов {driver.givenName + ' ' + driver.familyName}
      </Text>
      {isFetching ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        races.map((race, i) => <RaceItem key={i} race={race} />)
      )}
      <View style={{height: 100}}></View>
    </ScrollView>
  );
};

export default RaceScreen;
