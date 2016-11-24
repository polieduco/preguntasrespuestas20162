package RESTservice;

import java.sql.*;
import java.util.ArrayList;

import javax.swing.JOptionPane;

public class ConexionPostgres {

    public String consultar() {
    	
    	ArrayList<String> lista = new ArrayList<String>();
        String cc = "jdbc:postgresql://localhost:5432/managequestion?" +
            "user=postgres&password=Yeni1995";
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
        String cc = "jdbc:postgresql://localhost:5432/managequestion?" +
            "user=postgres&password=1234Abcd";
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
     String cc = "jdbc:postgresql://localhost:5432/managequestion?" +
         "user=postgres&password=1234Abcd";
     try {
         Class.forName("org.postgresql.Driver");
         Connection conexion = DriverManager.getConnection(cc);
         Statement comando = conexion.createStatement();
         String sql = 
             "select nombre,identificacion,username from tbusuario";
         ResultSet resultado = comando.executeQuery(sql);
         while(resultado.next()) {
         	String i = resultado.getString("nombre");
            String n = resultado.getString("identificacion");
            String u = resultado.getString("username");
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
 	     String cc = "jdbc:postgresql://localhost:5432/managequestion?" +
         "user=postgres&password=yeni1995";
 	     String sResult="";
     try {
         Class.forName("org.postgresql.Driver");
         Connection conexion = DriverManager.getConnection(cc);
         Statement comando = conexion.createStatement();
         String sql = "select count(*) from tbusuario where correo = '"+value+"'";
         System.out.print(sql);
         ResultSet resultado = comando.executeQuery(sql);
         if(resultado.next())
         {
        	 sResult="Email Enviado";
         }
         else{
        	 sResult="No existe mail!";
         }
       
     } catch(Exception e) {
         System.out.println("Error al realizar  esta accion  tipo de error:"+e.getMessage());
         sResult="Error al realizar  esta accion  tipo de error:"+e.getMessage();
     }
     return sResult;
 }
 

}