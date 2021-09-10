import axios from 'axios';
import constants from '../constants';

const {baseUrl, host, signUpPath, signInPath} = constants


const httpClient = axios.create({
    baseURL: `http://${baseUrl}:${host}/api`,
})

export const signUp = async data => {
    const responsePromise = httpClient.post(signUpPath, data);
    return responsePromise;
};

export const signIn = async data => {
    const responsePromise = httpClient.post(signInPath,data)
    return responsePromise
}