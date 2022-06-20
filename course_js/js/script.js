"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const filmName = prompt("Один из последних просмотренных фильмов?", ""),
          filmRate = prompt("На сколько оцените его?", "");

    if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
        personalMovieDB.movies[filmName] = filmRate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <=30 && personalMovieDB.count >= 10) {
    console.log("Вы классический зритель");
} else if (30 < personalMovieDB.count) {
    console.log("Вы киноман");
} else {
    console.log("произошла ошибка");
}
console.log(personalMovieDB);
