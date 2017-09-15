"use strict";

(function () {

    cinemaApp.service("movieDal", ["dal", CinemaDal]);

    function CinemaDal (dal) {

        this.getMovies = function () {
            return dal.http.GET("rest/cinema/json");
        };

        this.saveMovie = function (movieToSave) {
            return dal.http.POST("rest/cinema/json", movieToSave);
        };<!--

        this.updateBook = function (bookToUpdate) {
            return dal.http.PUT("rest/bookstore/json/", bookToUpdate);
        };

        this.deleteBook = function (bookToDelete) {
            return dal.http.DELETE("/rest/bookstore/json/", bookToDelete);
        };
        -->
    }
}());
