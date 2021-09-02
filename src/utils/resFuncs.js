import constants from '../constants';

const payload = (status = '', data = [], message = '', err = '') => ({
  status,
  data,
  message,
  err
});

export const created = (data,res) => {
  return (res
    .status(constants.statusCreated)
    .send(payload(constants.statusCreated, data)));
};

export const noContent = data => res.status(constants.statusNoContent).send(payload(constants.statusNoContent, data, '', ''));
;

export const success = data => {
  console.log(data);
  return res
    .status(constants.statusOk)
    .send(payload(constants.statusOk, data, '', ''));
};

export const errorCreated = (err, message) => {
  return res
    .status(constants.statusBadRequest)
    .send(payload(constants.statusBadRequest, [], message, err));
};

export const errorSuccess = (err, message) => {
  return res
    .status(constants.statusNotfound)
    .send(payload(constants.statusNotfound, [], message, err));
};
