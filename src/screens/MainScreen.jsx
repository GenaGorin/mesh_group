import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DriverItem from '../components/DriverItem';
import Paginator from '../components/Paginator';
import {getDrivers, setPage} from '../redux/driverSlice';
import {appStyles} from '../styles/styles';

function createPages(pages, pagesCount, currentPage) {
  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}

const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const totalCount = useSelector(state => state.drivers.totalCount);
  const drivers = useSelector(state => state.drivers.drivers);
  const isFetching = useSelector(state => state.drivers.isFetching);
  const currentPage = useSelector(state => state.drivers.currentPage);
  const error = useSelector(state => state.drivers.error);
  const pagesCount = Math.ceil(totalCount / 10);

  const pages = [];
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getDrivers(currentPage, 10));
  }, [currentPage]);

  const changePage = page => {
    dispatch(setPage(page));
  };

  if (error) {
    return (
      <View style={appStyles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Гонщики</Text>
      {isFetching ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        drivers.map((driver, i) => <DriverItem key={i} driver={driver} />)
      )}
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        {pages.map(page => (
          <Paginator
            key={page}
            changeCallback={changePage}
            page={page}
            isActive={currentPage === page ? true : false}
          />
        ))}
      </View>
    </View>
  );
};

export default MainScreen;
