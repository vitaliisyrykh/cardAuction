import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email().min(5),
  password: yup.string().required().min(4)
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required().min(5),
  password: yup.string().required().min(4)
});

export const cardSchema = yup.object().shape({
  name: yup.string().required().min(1),
  type: yup.string().required().min(1),
  origin: yup.string().required().min(1),
  image: yup.string().required().min(1),
  url: yup.string().required().min(1),
  episodeId: yup.number().integer().positive().min(1),
});

export const locationSchema = yup.object().shape({
  cardId: yup.number().integer().positive().min(1),
  name: yup.string().required().min(1),
  type: yup.string().required().min(1),
  dimension: yup.string().required().min(1),
  residents: yup.string().min(1),
  url: yup.string().required().min(1),
});

export const genderSchema = yup.object().shape({
  type: yup.string().matches(/(male|female|genderless|unknown)/)
});

export const episodeSchema = yup.object().shape({
  name: yup.string().required().min(1),
  airDate: yup.string().required().min(1),
  url: yup.string().required().min(1),
});

export const auctionCreateSchema = yup.object().shape({
  userId:yup.number().integer().required().positive().min(1),
  auctionId: yup.number().integer().required().positive().min(1),
  minBet: yup.number().moreThan(0.1).required().positive(),
  maxBet: yup.number().moreThan(0.1).required().positive(),
  minStep: yup.number().moreThan(0.1).required().positive(),
  maxTimeBidding: yup.date().min(new Date()).required(),
  minStepAddTimeBidding: yup.number()
});

export const betSchema = yup.object().shape({
  userId:yup.number().integer().required().positive().min(1),
  auctionId: yup.number().integer().required().positive().min(1),
  value: yup.number().moreThan(0.1).required().positive(),
})