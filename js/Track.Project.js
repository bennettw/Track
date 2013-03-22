var Projects = Track.module('Projects', function(Projects, Track, Backbone, Marionette, $, _) {

	Projects.Project = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false,
			archived: false,
			//todoList: new Todos.TodoCollection() // this is a static shared collection, why?
		},

		initialize: function() {
			this.setSlug(this.get('title'));
			this.set('todoList', new Todos.TodoCollection());  // prevents it from being a global shared collection
		},

		setSlug: function(title) {
			this.set('slug', title.toLowerCase().split(' ').join('-'));
		},

		isCompleted: function() {
			return this.get('completed');
		},

		isArchived: function() {
			return this.get('archived');
		},

		getTodoList: function() {
			return this.get('todoList');
		},

		addTodo: function(todo) {
			this.getTodoList().add(new Todos.Todo({ title: todo, project_title: this.get('slug') }));
			console.log(this.get('title') + ': adding todo: ' + todo);
		}
	});

	Projects.ProjectCollection = Backbone.Collection.extend({
		model: Projects.Project
	});
});