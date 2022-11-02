import {Text, View} from 'react-native';
import {raceItem} from '../styles/styles';

function RaceItem({race}) {
  return (
    <View style={raceItem.wrapper}>
      <Text>Сезон: {race.season}</Text>
      <Text>{race.raceName}</Text>
      <View style={raceItem.resultWrapper}>
        <Text>No: {race.Results[0].number}</Text>
        <Text>Pos: {race.Results[0].position}</Text>
        <Text>Laps: {race.Results[0].laps}</Text>
        <Text>Status: {race.Results[0].status}</Text>
      </View>
    </View>
  );
}

export default RaceItem;
