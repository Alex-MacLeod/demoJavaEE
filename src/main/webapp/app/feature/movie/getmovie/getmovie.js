(function() {

    var GetMovieController =  function(movieService)
    {
        var vm = this;

        function init() {
            movieService.getMovies().then(function (results) {
                console.log("In getmovie controller about to get movie " + results);
                vm.movies  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

        init();
    };
    cinemaApp.controller('GetMovieController', ['movieService', GetMovieController]);
}());