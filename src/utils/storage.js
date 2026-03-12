// utils/storage.js
// Utility functions for reading and writing movies to localStorage

const STORAGE_KEY = "movieLibrary_movies";

// Starter movies shown on first load (before any user data exists)
export const starterMovies = [
  {
    id: "1",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    description:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years. A visually breathtaking neo-noir set in a dystopian future.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
  },
  {
    id: "2",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Christopher Nolan's epic sci-fi masterwork that blends hard science with raw human emotion.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
  },
  {
    id: "3",
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    description:
      "A writer encounters the owner of an aging European hotel between the wars and the concierge who became his mentor. Wes Anderson's most ornate and delightful confection.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80",
  },
  {
    id: "4",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Bong Joon-ho's genre-defying Palme d'Or winner.",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&q=80",
  },
  {
    id: "5",
    title: "Dune",
    year: 2021,
    rating: 8.0,
    description:
      "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy. Denis Villeneuve's awe-inspiring space opera.",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80",
  },
  {
    id: "6",
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realise a student's potential.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
  },
];

/**
 * Load movies from localStorage.
 * If no data exists yet, seed with starter movies and persist them.
 * @returns {Array} array of movie objects
 */
export function loadMovies() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // First visit – persist starter data
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
