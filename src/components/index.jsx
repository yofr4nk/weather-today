import React, {Component} from 'react';
import HeaderWeatherApp from './headers/WeatherAppHeader';
import PlacesList from './bodySection/places/PlacesList';
import {getForecastPlaces, setForecastPlaces} from './fetchData/forecastPlaces';

class App extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
			places: []
		};
		this.setPlaces = this.setPlaces.bind(this);
		this.getPlaces = this.getPlaces.bind(this);
  }

  async getPlaces() {
		try {
			const places = await getForecastPlaces();
			this.setState({
				places
			});
		} catch(err) {
			return new Error(err);
		}
	}
	
	setPlaces() {
		const placeToAdd = [document.getElementsByName('placeToAdd')[0].value];
		document.getElementsByName('placeToAdd')[0].value = '';
		return setForecastPlaces(placeToAdd).then((place) => {
			const places = this.state.places;
			this.setState({
				places: places.concat(place)
			});
		})
		.catch(err => {
			return new Error(err);
		});
	}

  componentDidMount() {
		this.getPlaces();
	}

  render() {
    return (
      <div className="App">
        <HeaderWeatherApp  addPlaces={this.setPlaces}/>
        <PlacesList places={this.state.places} />
      </div>
    );
  }
}

export default App;