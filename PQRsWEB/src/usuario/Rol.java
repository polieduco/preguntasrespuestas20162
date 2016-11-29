package usuario;

import java.io.IOException;
import java.util.Properties;

import RESTservice.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart;

@WebServlet("/Rol")
public class Rol extends HttpServlet{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ConexionPostgres conn = new ConexionPostgres();
		
		
		System.out.println(request.getParameter("username").trim());
		String user = request.getParameter("username").trim();
		String pass = request.getParameter("password").trim();
		if(user == null || "".equals(user)){
			user = "digite algun dato valido";
			
		}
		String resultado=conn.findUserPassword(user,pass);
		System.out.println("usuario: "+user+"---"+pass);	
		System.out.println("La consulta  es : "+resultado);	
		String result="";
		if(resultado.equals(" ")||resultado.equals("")||resultado==null){
			
			result=("Error en autenticación usuario o password incorrectos");	
			
			
		}else{
			result=("Enhorabuena conectado!");	
				
		}
		
		
		//if(resultado.split("-"))
		response.setContentType("text/plain");
		response.getWriter().write(result);
	}
}
