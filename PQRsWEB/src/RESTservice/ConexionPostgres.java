package RESTservice;

import java.sql.*;
import java.util.ArrayList;

public class ConexionPostgres {

    public String consultar() {
    	
    	ArrayList<String> lista = new ArrayList<String>();
        String cc = "jdbc:postgresql://preguntas.csknyphdwtke.us-west-2.rds.amazonaws.com:5432/ManageQuestion?" +
            "user=gestor1&password=Prueba123";
        try {
            Class.forName("org.postgresql.Driver");
            Connection conexion = DriverManager.getConnection(cc);
            Statement comando = conexion.createStatement();
            String sql = 
                "SELECT idpregunta,pregunta FROM tbpregunta";
            ResultSet resultado = comando.executeQuery(sql);
            while(resultado.next()) {
            	String i = resultado.getString("idpregunta");
                String n = resultado.getString("pregunta");
//                String a = resultado.getString('"'+"IdPregunta"+'"');
                lista.add(i+" - "+ n.replace('Â', ' ')) ;  
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
String cc = "jdbc:postgresql://preguntas.csknyphdwtke.us-west-2.rds.amazonaws.com:5432/ManageQuestion?" +
            "user=gestor1&password=Prueba123";        
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
 
 
 
 public String listarUsuarios() {
 	
 	ArrayList<String> lista = new ArrayList<String>();
String cc = "jdbc:postgresql://preguntas.csknyphdwtke.us-west-2.rds.amazonaws.com:5432/ManageQuestion?" +
            "user=gestor1&password=Prueba123";
     try {
         Class.forName("org.postgresql.Driver");
         Connection conexion = DriverManager.getConnection(cc);
         Statement comando = conexion.createStatement();
         String sql = 
             "select nombre,identificacion,username,password from tbusuario";
         ResultSet resultado = comando.executeQuery(sql);
         while(resultado.next()) {
         	String i = resultado.getString("nombre");
            String n = resultado.getString("identificacion");
            String u = resultado.getString("username");
            String p = resultado.getString("password");
//             String a = resultado.getString('"'+"IdPregunta"+'"');
             lista.add(i+" - "+ n+" - "+ u) ;  
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
 
	public String findPassword(String value) {
		String cc = "jdbc:postgresql://localhost:5432/managequestion?" + "user=postgres&password=yeni1995";
		String sResult="";
		try {
			Class.forName("org.postgresql.Driver");
			Connection conexion = DriverManager.getConnection(cc);
			Statement comando = conexion.createStatement();
			String sql = "select count(*) from tbusuario where correo = '"+value+"'";
			System.out.print(sql);
			ResultSet resultado = comando.executeQuery(sql);
			if(resultado.next()){        	 
				String sql2 = "select password from tbusuario where correo = '"+value+"'";
				ResultSet resultado2 = comando.executeQuery(sql2);
				if(resultado2.next()){
					String retorno = resultado2.getString("Password");
					sResult = retorno;
					}
				}
			else{
				sResult="No existe mail/usuario";
				}
			} catch(Exception e) {
				System.out.println("Error al realizar  esta accion  tipo de error:"+e.getMessage());
				sResult="Error al realizar  esta accion  tipo de error:"+e.getMessage();
				}
		return sResult;
		}

 
}