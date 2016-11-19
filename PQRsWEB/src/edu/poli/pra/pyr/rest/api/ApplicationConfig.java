/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.pra.pyr.rest.api;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author User
 */
@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
    	resources.add(edu.poli.pra.pyr.rest.api.TbaprobacionpreguntasFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbareaaprobacionFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbcategoriaFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbestadoFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbpalabrasclaveFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbpreguntaFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbpreguntasxpalabrasclaveFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbrespuestaFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbrolFacadeREST.class);
    	resources.add(edu.poli.pra.pyr.rest.api.TbusuarioFacadeREST.class);
    }
    
}
