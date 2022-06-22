"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <=30 && personalMovieDB.count >= 10) {
        console.log("Вы классический зритель");
    } else if (30 < personalMovieDB.count) {
        console.log("Вы киноман");
    } else {
        console.log("произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

console.log(personalMovieDB);

