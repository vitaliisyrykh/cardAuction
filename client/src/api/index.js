import axios from 'axios';
import constants from '../constants';
import AuthApi from "./AuthApi";

const {baseUrl, host, signUpPath, signInPath} = constants


const httpClient = axios.create({
    baseURL: `http://${baseUrl}:${host}/api`,
})

export const auth = new AuthApi(httpClient)

export const signUp = async data => {
    const responsePromise = httpClient.post(signUpPath, data);
    return responsePromise;
};

export const signIn = async data => {
    const responsePromise = httpClient.post(signInPath,data)
    return responsePromise
}