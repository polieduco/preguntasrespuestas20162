package RESTservice;

import java.sql.*;
import java.util.ArrayList;

public class ConexionPostgres {

    public String consultar() {
    	
    	ArrayList<String> lista = new ArrayList<String>();
        String cc = "jdbc:postgresql://localhost:5432/managequestion?" +
            "user=postgres&password=12345678";
        try {
            Class.forName("org.postgresql.Driver");
            Connection conexion = DriverManager.getConnection(cc);
            Statement comando = conexion.createStatement();
            String sql = 
                "SELECT idpregunta,pregunta FROM tbpregunta"+'"';
            ResultSet resultado = comando.executeQuery(sql);
            while(resultado.next()) {
            	String i = resultado.getString("idpregunta");
                String n = resultado.getString("pregunta");
//                String a = resultado.getString('"'+"IdPregunta"+'"');
                lista.add(i+" ; "+ n.replace('�', ' ')) ;  
            }
            resultado.close();
            comando.close();
            conexion.close();
        } catch(Exception e) {
            System.out.println(e.getMessage());
            System.out.println("Error");
        }
        
        String result = "- "+lista.toString().replace(",", "\n-").replace("[", "").replace("]", "");        
		return result;
    }

 public String filtrar(int value) {
    	
    	ArrayList<String> lista = new ArrayList<String>();
        String cc = "jdbc:postgresql://localhost:5432/managequestion?" +
            "user=postgres&password=1234Jary";
        try {
            Class.forName("org.postgresql.Driver");
            Connection conexion = DriverManager.getConnection(cc);
            Statement comando = conexion.createStatement();
            String sql =
            		"select p.pregunta,r.respuesta,u.nombre from tbpregunta as p inner join tbrespuesta as r on p.idpregunta = r.idpregunta inner join tbusuario as u on p.idusuario = u.idusuario where p.idpregunta = "+value;
            ResultSet resultado = comando.executeQuery(sql);
            while(resultado.next()) {
            	String i = resultado.getString("pregunta");
                String n = resultado.getString("respuesta");
                String u = resultado.getString("nombre");
                lista.add("pregunta: "+i +"\nrespuesta: "+ n+"\ncreada por: "+u) ;  
            }
            resultado.close();
            comando.close();
            conexion.close();
        } catch(Exception e) {
            System.out.println(e.getMessage());
            System.out.println("Error");
        }
        String result =lista.toString().replace(",", "\n-").replace("[", "").replace("]", "");        
		return result;
    }
}