package interoperability;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import business.MovieService;

@Path("/cinema")
public class MovieEndPoint {

	@Inject
	private MovieService movieService;

	@GET
	@Path("/json")
	@Produces({ "application/json" })
	public String getBooksAsJson() {
		return movieService.getMovies();
	}

	@POST
	@Path("/json")
	@Produces({ "application/json" })
	public String addNewBookToMap(String movieJson) {
		return movieService.addMovie(movieJson);
	}

	/*@PUT
	@Path("/json/{id}")
	@Produces({ "application/json" })
	public String replaceBookFromBookStore(@PathParam("id") Integer id, String bookJson) {
		return movieService.replaceBook(id, bookJson);
	}

	@DELETE
	@Path("/json/{id}")
	@Produces({ "application/json" })
	public String deleteBookFromBookStore(@PathParam("id") Integer id) {
		return movieService.deleteBook(id);
	}*/

}
