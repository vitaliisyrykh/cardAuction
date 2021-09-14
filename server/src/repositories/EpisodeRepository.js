import EpisodeModel from "../models/EpisodeModel";

class EpisodeRepository {
  async add(body) {
    try {
      const { name, airDate, url } = body;
      const addedEpisode = await new EpisodeModel({
        name: name,
        air_date: airDate,
        url: url,
      });
      return addedEpisode;
    } catch (error) {
      return error;
    }
  }
}
export default new EpisodeRepository();
