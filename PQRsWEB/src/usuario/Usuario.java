package usuario;

import java.io.IOException;
import RESTservice.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import RESTservice.*;
@WebServlet("/Usuario")
public class Usuario  extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ConexionPostgres conn = new ConexionPostgres();
		String userEmail = request.getParameter("userEmail").trim();
		if(userEmail == null || "".equals(userEmail)){
			userEmail = "si esta comunicando";
		}
		String resultFind = conn.findPassword(userEmail);
		System.out.println(conn.findPassword(userEmail));
		
		String greetings = resultFind;
		
		 
		response.setContentType("text/plain");
		response.getWriter().write(greetings);
	}

}
