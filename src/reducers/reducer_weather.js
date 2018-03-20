/**
 * Created by Wojtek on 2018-03-19.
 */
import FETCH_WEATHER from '../actions/index';

//while exorting reducer always have to gie name to reducer - not just plain function
export default function WeatherReducer(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];

            console.log('Action received:', action);

    }
    return state;

}
