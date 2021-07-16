import axios from 'axios';
import { GET_STATISTICS_LIST } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// get statistics list

export const getStatistics = () => dispatch => {
    axios.get('/wr/api/statistics')
        .then(result => {
            dispatch({
                type: GET_STATISTICS_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error))
}