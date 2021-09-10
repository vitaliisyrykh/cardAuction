import axios from 'axios';
import constants from '../constants';
import AuthApi from "./AuthApi";

const {baseUrl, host} = constants


const httpClient = axios.create({
    baseURL: `http://${baseUrl}:${host}/api`,
})

export const auth = new AuthApi(httpClient)

export default httpClient;