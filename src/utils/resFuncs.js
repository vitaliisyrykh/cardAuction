import constants from '../constants';
import createHttpError, { Forbidden } from 'http-errors';

const payload = (status = '', data = [], message = '', err = '') => ({
  status,
  data,
  message,
  err
});

export const successCreated = (res, data) =>
  res
    .status(constants.statusCreated)
    .send(payload(constants.statusCreated, data));

export const successNoContent = (res, data) =>
  res
    .status(constants.statusNoContent)
    .send(payload(constants.statusNoContent, data, '', ''));

export const success = (res, data) =>
  res
    .status(constants.statusOk)
    .send(payload(constants.statusOk, data, '', ''));

export const badRequestError = (res, message) =>
  res
    .status(constants.statusBadRequest)
    .send(
      payload(
        constants.statusBadRequest,
        [],
        message,
        createHttpError(constants.statusBadRequest, message)
      )
    );

export const notFoundError = (res, message) =>
  res
    .status(constants.statusNotfound)
    .send(
      payload(
        constants.statusNotfound,
        [],
        message,
        createHttpError(constants.statusNotfound, message)
      )
    );

export const forBiddenError = (res, message) => 
  res
    .status(constants.statusForBidden)
    .send(
      payload(
        constants.statusForBidden,
        [],
        message,
        createHttpError(constants.statusForBidden,message)
        )
    );     
