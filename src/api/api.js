import * as axios from 'axios';

const samuraiApi = axios.create({
  baseURL: 'http://ergast.com/api/f1/',
});

export const api = {
  getDrivers(limit, offset) {
    return samuraiApi.get('drivers.json?limit=' + limit + '&offset=' + offset);
  },
  getRacers(racerId) {
    return samuraiApi.get('drivers/' + racerId + '/results.json');
  },
};
