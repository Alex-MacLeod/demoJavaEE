(function() {

    var AddMovieController =  function(movieService) {
        var vm = this;

        vm.movies = [];

        vm.add = function (movie) {
            movieService.saveMovie(movie).then(function (movie) {
                console.log("Movie " + movie.title + "added");
                vm.movies.push(movie);
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }
    };
    cinemaApp.controller('AddMovieController', ['movieService', AddMovieController]);
}());