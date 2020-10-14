import NetInfo from '@react-native-community/netinfo';
import axios from 'axios'

import { BASE_URL, TIME_OUT, requestMethod, USER_KEY } from './Constants';
import { log } from '../Utility';

import { errorCodes } from './Constants';
import { strings } from './errorMessages';

export const networkAvailable = () => new Promise((resolve, reject) =>
    NetInfo.fetch().then(state => state.isConnected ? resolve(true) : resolve(false)))


export const serverCall = async (url, method, data) => new Promise(async (resolve, reject) => {

    var headers = {
        'user-key':USER_KEY
    }

    var timeout = TIME_OUT

    let requestObject = {}

    if (method == requestMethod.GET) {
        requestObject = {
            url, method, baseURL: `${BASE_URL}`, timeout, timeoutErrorMessage: strings.request_timeout, responseType: 'json', headers,
        }
    } else {
        requestObject = {
            url, method, baseURL: `${BASE_URL}`, data, timeout, timeoutErrorMessage: strings.request_timeout, responseType: 'json', headers,
        }
    }
    let net = await networkAvailable()

    if (!net) {
        resolve({ success: false, data: {}, errorCode: errorCodes.NO_INTERNET, message: strings.no_internet })
    } else {

        axios.request(requestObject)
            .then((response) => {
                log('=-=-=-=-=-=-axios=-=-=-=-', response);
                if (response.status === 200) {
                    resolve({ success: true, data: response.data, message: '' })
                }
            })
            .catch(async (error) => {
                log('API ERROR:-', error.response);
                // if (response.status === 403) {
                //     resolve({ success: false, data: {}, message: '' })
                // } else if (response.status === 406) {
                //     resolve({ success: false, data: {}, message: '' })
                // } else if (response.status === 501) {
                //     resolve({ success: false, data: {}, message: '' })
                // } else {
                //     resolve({ success: false, data: {}, message: '' })
                // }
                resolve({ success: false, errorCode: errorCodes.UNEXPECTED_ERROR, message: strings.server_error })
            })

    }



})
