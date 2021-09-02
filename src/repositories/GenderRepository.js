import GenderModel from '../models/GenderModel';

class GenderRrepository{
  async create(body){
    const {type}=body;
    try {
      const createdGender = await new GenderModel({type}).save(null,{method:'insert'});
      return createdGender;
    } catch (error) {
      console.log(error, '<<< Cannot create gender');
    }
  }
  async findAll(){
    try {
      const allGenders = await new GenderModel().fetchAll();
      return allGenders
    } catch (error) {
      console.log(error, '<<< Cannot find genders');
    }
  }
}

export default new GenderRrepository();