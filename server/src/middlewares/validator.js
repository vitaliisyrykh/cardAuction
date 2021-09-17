import { 
  signUpSchema, 
  signInSchema, 
  cardSchema,
  locationSchema,
  genderSchema,
  episodeSchema,
  auctionCreateSchema,
  betSchema
} from '../validationSchems/schems';
import {badRequestError} from '../utils/resFuncs'

const validateFunc = (schema) =>{
  return  async (req,res,next)=>{
    try {
      const validResult = await schema.isValid(req.body);
      if(validResult){
        next()
      }return badRequestError(req, 'Invalid data')
      
    } catch (error) {
      next(error)
    }
}};


export const singUpValidate = validateFunc(signUpSchema);

export const signInValidate = validateFunc(signInSchema);

export const cardValidate = validateFunc(cardSchema);

export const locationValidate = validateFunc(locationSchema);

export const genderValidate = validateFunc(genderSchema);

export const episodeValidate = validateFunc(episodeSchema);

export const auctionValidate = validateFunc(auctionCreateSchema);

export const betValidate = validateFunc(betSchema);
