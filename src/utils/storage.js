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
    image: "https://yandex.ru/images/search?pos=1&from=tabbar&img_url=https%3A%2F%2Fi.pinimg.com%2F736x%2F74%2F8c%2F7a%2F748c7ae1c08f94a82f504b6c9574d81f.jpg&text=Blade+Runner+2049+photo+600x400&rpt=simage&lr=10309",
  },
  {
    id: "2",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Christopher Nolan's epic sci-fi masterwork that blends hard science with raw human emotion.",
    image: "https://yandex.ru/images/search?text=Interstellar+photo+600x400&pos=2&rpt=simage&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7b%2Fa0%2Fd2%2F7ba0d2720b195ef6acd2955475e888ac.jpg&from=tabbar&lr=10309",
  },
  {
    id: "3",
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    description:
      "A writer encounters the owner of an aging European hotel between the wars and the concierge who became his mentor. Wes Anderson's most ornate and delightful confection.",
    image: "https://avatars.mds.yandex.net/i?id=b01b38f4a3534da4c5a45dac058f24a7f9678b6a-5219031-images-thumbs&n=13",
  },
  {
    id: "4",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Bong Joon-ho's genre-defying Palme d'Or winner.",
    image: "https://avatars.mds.yandex.net/i?id=8c48524e6a4010f35672e21bf3ead76a9af2b261-5484959-images-thumbs&n=13",
  },
  {
    id: "5",
    title: "Dune",
    year: 2021,
    rating: 8.0,
    description:
      "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy. Denis Villeneuve's awe-inspiring space opera.",
    image: "https://avatars.mds.yandex.net/i?id=48c7051e51e9cda5c9d94809e17e66270a7f136d-10120629-images-thumbs&n=13",
  },
  {
    id: "6",
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realise a student's potential.",
    image: "https://avatars.mds.yandex.net/i?id=e8f0aa7f9f0e2121ab1cf9c1e1bfff86c91fb762-5524638-images-thumbs&n=13",
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
