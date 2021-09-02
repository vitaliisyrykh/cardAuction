import constants from '../constants';
import createHttpError from 'http-errors';

const payload = (status = '', data = [], message = '', err = '') => ({
  status,
  data,
  message,
  err
});

export const created = (res, data) =>
  res
    .status(constants.statusCreated)
    .send(payload(constants.statusCreated, data));

export const noContent = (res, data) =>
  res
    .status(constants.statusNoContent)
    .send(payload(constants.statusNoContent, data, '', ''));

export const success = (res, data) =>
  res
    .status(constants.statusOk)
    .send(payload(constants.statusOk, data, '', ''));

export const errorCreated = (res, message) =>
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

export const unsuccess = (res, message) =>
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
