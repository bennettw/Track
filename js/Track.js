var Track = new Backbone.Marionette.Application();

Track.addRegions({
	header: '#header',
	main: '#container'
});

Track.addInitializer(function(){
  Track.header.show(new Layout.Header());
  /*Track.main.show(new TodoListCompositeView({
    collection : todoList
  }));
  app.footer.show(new Footer());*/

  //todoList.fetch();
});

Track.on('initialize:after', function() {
	Backbone.history.start();

	// how do i tell regions to display stuff?  need a router?
});