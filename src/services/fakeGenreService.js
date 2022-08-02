export const genres = [
  { _id: '5b21ca3eeb7f6fbccd471818', genreName: 'Action' },
  { _id: '5b21ca3eeb7f6fbccd471814', genreName: 'Comedy' },
  { _id: '5b21ca3eeb7f6fbccd471820', genreName: 'Thriller' },
];

export function getGenres() {
  return genres.filter((g) => g);
}
