import { getMovies, getById, deleteMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    Movies: () => getMovies(),
    Movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { title, pic, summary, score }) =>
      addMovie(title, pic, summary, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
