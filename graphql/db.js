import axios from "axios";

const API_URL = "https://yts-proxy.now.sh/list_movies.json";

export const getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(API_URL);
  return movies;
};
