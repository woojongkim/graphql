import { getMovies } from "./db";

const resolvers = {
  Query: {
    Movies: () => getMovies(),
  },
};

export default resolvers;
