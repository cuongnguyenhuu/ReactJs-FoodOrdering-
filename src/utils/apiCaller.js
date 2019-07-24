import axios from 'axios';
import * as config from './../constants/config';

export default function callAPI(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    });
};