var Todos = Track.module('Todos', function(Todos, Track, Backbone, Marionette, $, _) {

	Todos.Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false
		},

		isCompleted: function() {
			return this.get('completed');
		}
	});

	Todos.TodoCollection = Backbone.Collection.extend({
		model: Todos.Todo
	})
});