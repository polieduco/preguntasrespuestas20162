define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/projects/projectsTemplate.html'
  ], function($, _, Backbone, SidebarView, projectsTemplate){
  var ProjectsView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(projectsTemplate);
    }
  });

  return ProjectsView;
});
