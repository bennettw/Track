var Track = new Backbone.Marionette.Application();

Track.addRegions({
	header: '#header',
  headerProjectList: '#header-project-list',
	main: '#container'
});

Track.addInitializer(function(){

  // Setup initial data
  // TODO: This needs to be replaced with a backend and should it even be 
  // handled in this methOD?
  var bpo = new Projects.Project({ title: 'BPO Enhancements' });
  bpo.addTodo('Add a new field to the print out');
  bpo.addTodo('Prevent this user from doing that');
  bpo.addTodo('Copy these fields to a new object');
  var pcard = new Projects.Project({ title: 'PCard' });
  pcard.addTodo('Fix the charges');
  pcard.addTodo('Do some things to the accountings');
  var analysis = new Projects.Project({ title: 'Analysis' });
  analysis.addTodo('Add some reports yo');
  var ProjectCollection = new Projects.ProjectCollection();
  ProjectCollection.add(bpo);
  ProjectCollection.add(pcard);
  ProjectCollection.add(analysis);

  // Set up the controllers
  var mainController = new Projects.MainController({ region: Track.main });
  mainController.show(new Layout.ProjectCompositeView({
    model: bpo,
    collection: bpo.getTodoList()
  }));
  
  Track.headerProjectList.show(new Layout.Header({ collection: ProjectCollection }));
/*  Track.main.show(new Layout.ProjectCompositeView({
    model: bpo,
    collection: bpo.getTodoList()
  }));*/
  
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