import axios from 'axios';
import constants from '../constants';

const httpClient = axios.create({
  baseURL:`http://${constants.baseUrl}:${constants.host}/api`,
})

export const signUp = async data =>{
  const responsePromise = httpClient.post('/auth/sign-up',data);
  return responsePromise;
}