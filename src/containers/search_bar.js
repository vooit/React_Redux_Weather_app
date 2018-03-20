/**
 * Created by Wojtek on 2018-03-18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(e) {
        let newValue = e.currentTarget.value;
        this.setState({
            term: newValue
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        // We need to go and fetch weather data
        //thenks to bindActionCreators and dispatch we have acces to props in fetchWeather
        //call action creator
        this.props.fetchWeather(this.state.term);

        this.setState({ term: "" });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        value={this.state.term}
                        onChange={this.onInputChange}
                        className="form-control"
                        placeholder="get forecast for desired city"/>
                    <span className="input-group-btn">
                          <button type="submit"
                                  className="btn btn-primary"
                          >Search
                    </button>
                    </span>
                </form>
                <p>{this.state.term}</p>
            </div>
        )
    }
}
//getting access to the function fetching weather inside of this component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}
//null for
export default connect(null, mapDispatchToProps)(SearchBar);