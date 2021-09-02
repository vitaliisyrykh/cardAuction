import RefreshToken from '../models/RefreshTokenModel';

class RefreshTokenRepository {
  async add (userId, { value }) {
    try {
      const { attributes } = await new RefreshToken({
        user_id: userId,
        value: value
      }).save();
      return attributes; 
    } catch (error) {
      console.log(error, '<<< Add Refresh Token Error');
    }
  }
  async countTokens (userId) {
    try {
      const count = await new RefreshToken()
        .where('user_id', userId)
        .count('value');
        
        return count;
    
      } catch (error) {
     console.log(error, '<<< Token count error '); 
    }
      
  }
  async getRefreshTokenId (userId) {
    try {
      const oldRefreshToken = await new RefreshToken({ user_id: userId })
        .orderBy('updated_at', 'ASC')
        .fetch();
     
      return oldRefreshToken.id;
    } catch (error) {
      console.log(error, '<<< Cannot Get Refresh Token ');  
    }
  }
  async update (userId, tokenId, value) {
    try {
      const updatedRefreshToken = await new RefreshToken()
        .where({ user_id: userId, id: tokenId })
        .save({ value: value }, { patch: true });
        
      return updatedRefreshToken.value;
    } catch (error) {
      console.log(error, '<<< Cannot Update Refresh Token ');
    }
  }
  async findRefreshTokenUserId(tokeValue){
    try {
      const userId = await new RefreshToken().where({value:tokeValue}).fetch();
       return userId.attributes.id
    } catch (error) {
      console.log(error, '<<< Cannot Find By User ID');
    }
  }  
}

export default new RefreshTokenRepository();
