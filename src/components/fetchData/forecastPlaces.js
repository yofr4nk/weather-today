import ApolloService from './../../utils/apollo-client/client';
import {URI} from './../../constants/';
import {map} from 'lodash';

const getForecastPlaces = () => {
  const ApolloClient = new ApolloService(URI);

  return ApolloClient.query(`{
    forecast{
      get{
        title: name
        time: hour
        temperature {
          F
          C
        }
        address
      }
    }
  }`).then(response => {
    return response.data.forecast.get;
  });
};

const setForecastPlaces = (placesInfo) => {
  const ApolloClient = new ApolloService(URI);
  return ApolloClient.mutation(`mutation addPlace($places: [String!]!){
    setPlaces(places: $places){
      name
      latitude
      longitude
      weatherPlace{
        title: name
        time: hour
        temperature {
          F
          C
        }
        address
      }
    }
  }`, {places: placesInfo})
  .then(response => {
    return map(response.data.setPlaces, 'weatherPlace');
  });
};

export {
  getForecastPlaces,
  setForecastPlaces
};