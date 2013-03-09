var Todos = Track.module('Todos', function(Todos, Track, Backbone, Marionette, $, _) {

	Todos.Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false
		},

		initialize: function() {
			this.setSlug(this.get('title'));
		},

		isCompleted: function() {
			return this.get('completed');
		},

		setSlug: function(title) {
			this.set('slug', title.toLowerCase().split(' ').join('-'));
			console.log('slug = ' + this.get('slug'));
		}
	});

	Todos.TodoCollection = Backbone.Collection.extend({
		model: Todos.Todo
	})
});