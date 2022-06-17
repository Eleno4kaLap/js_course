"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const lastFilmRate1 = prompt("На сколько оцените его?", "");
const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const lastFilmRate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = lastFilmRate1;
personalMovieDB.movies[lastFilm2] = lastFilmRate2;

console.log(personalMovieDB);