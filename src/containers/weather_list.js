/**
 * Created by Wojtek on 2018-03-20.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component {


    renderWeather(cityData) {
        const name = cityData.city.name;

        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// function mapStateToProps(state) {
//     return {weather: state.weather}
// }

function mapStateToProps({weather}) {
    return {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);