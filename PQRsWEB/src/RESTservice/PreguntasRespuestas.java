package RESTservice;
 
import java.util.Arrays;
import java.util.List;
 


import javax.ws.rs.ApplicationPath;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Application;
 
@ApplicationPath("rest")
@Path("PreguntasRespuestas")

public class PreguntasRespuestas extends Application {
	
	ConexionPostgres sql = new ConexionPostgres();
 
	@GET
	@Path("getArray")
	@Produces("application/json")
	public List<String> getSampleData(@QueryParam("value") String value) {
		return Arrays.asList(new String[] { "one", "two", "three", "four", value });
	}
 
	@GET
	@Path("getString")
	@Produces("application/json")
	public String getString() {
		return "Test";
	}
	
	@GET
	@Path("listarPreguntas")
	@Produces("application/json")
	public String listarPreguntas() {
		return sql.consultar();
	}
	
	@GET
	@Path("filtrarPreguntas")
	@Produces("application/json")
	public String filtrarClientes(@QueryParam("value") int value) {
		return sql.filtrar(value);
	}
	
	@GET
	@Path("listarUsuarios")
	@Produces("application/json")
	public String listarUsuarios() {
		return sql.listarUsuarios();
	}
	
	@GET
	@Path("filtrarPreguntasString")
	@Produces("application/json")
	public String filtrarPreguntasString(@QueryParam("value") String value) {
		return sql.filtrarPreguntasString(value);
	}
	
	
}