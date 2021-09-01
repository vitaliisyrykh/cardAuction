import EpisodeModel from '../models/EpisodeModel';

class EpisodeRepository {
  async addEpisode (body) {
    try {
      const { name, airDate, url } = body;
      const addedEpisode = await new EpisodeModel({
        name: name,
        air_date: airDate,
        url: url
      });
      return addedEpisode;
    } catch (error) {
      console.log(error, '<<< Cannot add episode');
    }
  }
}
export default new EpisodeRepository();
