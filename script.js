const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотреных фильмов?', ''),
    b = prompt('На сколько вы оцените его?', ''),
    c = prompt('Один из последних просмотреных фильмов?', ''),
    d = prompt('На сколько вы оцените его?', '');
personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);
