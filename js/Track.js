var Track = new Backbone.Marionette.Application();

Track.addRegions({
	header: '#header',
	main: '#container'
});

Track.addInitializer(function(){
  var bpo = new Projects.Project({ title: 'BPO Enhancements' });
  var pcard = new Projects.Project({ title: 'PCard' });
  var ProjectCollection = new Projects.ProjectCollection();
  ProjectCollection.add(bpo);
  ProjectCollection.add(pcard);
  Track.header.show(new Layout.Header({ collection: ProjectCollection }));
  /*Track.main.show(new TodoListCompositeView({
    collection : todoList
  }));
  app.footer.show(new Footer());*/

  //todoList.fetch();
});

Track.on('initialize:after', function() {
	Backbone.history.start();

	// how do i tell regions to display stuff?  need a router?
  //console.log('num projects: ' + ProjectCollection.size());
});