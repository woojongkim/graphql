export let movies = [
  {
    id: 24129,
    pic:
      "https://yts.mx/assets/images/movies/folklore_the_long_pond_studio_sessions_2020/medium-cover.jpg",
    summary:
      "In Folklore: The Long Pond Studio Sessions, Taylor Swift performs each song in order of her album, folklore, and reveals the stories and secrets behind all 17 songs.",
    title: "Folklore: The Long Pond Studio Sessions",
    score: 9.1,
  },
  {
    id: 23519,
    pic:
      "https://yts.mx/assets/images/movies/rom_boys_40_years_of_rad_2020/medium-cover.jpg",
    summary:
      "It is one of the world's oldest and most unique skate parks, but following a devastating fire, it is financially on its knees. Meet the park's middle age skaters, BMXers and street artists, who against all the odds, are fighting to keep it open alive for the next generation. Welcome to Britain's Dogtown. Shot in stunning full 4K this is the first time a feature length documentary has looked at the early British skateboarding scene and the first generation of skaters and BMX riders from the late seventies and eighties who are still going strong. Rom Boys features archive footage from the past 40 years and over thirty interviews with some of the worlds biggest names in skate and BMX.",
    title: "Rom Boys: 40 Years of Rad",
    score: 8.7,
  },
  {
    id: 1151,
    pic: "https://yts.mx/assets/images/movies/Fight_Club_1999/medium-cover.jpg",
    summary:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.",
    title: "Fight Club",
    score: 6.5,
  },
  {
    id: 1208,
    pic:
      "https://yts.mx/assets/images/movies/Forrest_Gump_1994/medium-cover.jpg",
    summary:
      "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
    title: "Forrest Gump",
    score: 3.2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedmoives = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedmoives.length) {
    movies = cleanedmoives;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (title, pic, summary, score) => {
  const newMovie = {
    id: movies.length + 1,
    title,
    pic,
    summary,
    score,
  };
  movies.push(newMovie);

  return newMovie;
};
