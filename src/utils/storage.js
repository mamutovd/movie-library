// utils/storage.js
// Utility functions for reading and writing movies to localStorage

const STORAGE_KEY = "movieLibrary_movies";
const VERSION_KEY = "movieLibrary_version";
const CURRENT_VERSION = "2";

// Starter movies shown on first load (before any user data exists)
export const starterMovies = [
  {
    id: "1",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    description:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years. A visually breathtaking neo-noir set in a dystopian future.",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
  {
    id: "2",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Christopher Nolan's epic sci-fi masterwork that blends hard science with raw human emotion.",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: "3",
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    description:
      "A writer encounters the owner of an aging European hotel between the wars and the concierge who became his mentor. Wes Anderson's most ornate and delightful confection.",
    image: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRz4AZaW9Ngko.jpg",
  },
  {
    id: "4",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Bong Joon-ho's genre-defying Palme d'Or winner.",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: "5",
    title: "Dune",
    year: 2021,
    rating: 8.0,
    description:
      "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy. Denis Villeneuve's awe-inspiring space opera.",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklpcvzeBO6lIJFTgD0RCXT.jpg",
  },
  {
    id: "6",
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realise a student's potential.",
    image: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
  },
];

/**
 * Load movies from localStorage.
 * If version is outdated or no data exists — seed with starter movies.
 * @returns {Array} array of movie objects
 */
export function loadMovies() {
  try {
    const version = localStorage.getItem(VERSION_KEY);

    // Если версия устарела — сбросить данные и загрузить новые
    if (version !== CURRENT_VERSION) {
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      saveMovies(starterMovies);
      return starterMovies;
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveMovies(starterMovies);
      return starterMovies;
    }
    return JSON.parse(raw);
  } catch {
    // Corrupted data – fall back to starter set
    return starterMovies;
  }
}

/**
 * Persist the full movies array to localStorage.
 * @param {Array} movies – array of movie objects to save
 */
export function saveMovies(movies) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (e) {
    console.error("Failed to save movies to localStorage:", e);
  }
}

/**
 * Generate a simple unique id for new movies.
 * @returns {string} timestamp-based id
 */
export function generateId() {
  return Date.now().toString();
}