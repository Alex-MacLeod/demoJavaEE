(function() {

    var AddMovieController =  function(movieService) {
        var vm = this;

        vm.add = function (movie) {
            <!-- vm.movie = {title:vm.title,genre:vm.genre,ageRating:vm.rating };-->
            movieService.saveMovie(movie).then(function (results) {
                console.log("Movie " + movie.title + "added");
                vm.movies = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }
    };
    cinemaApp.controller('AddMovieController', ['movieService', AddMovieController]);
}());