var Projects = Track.module('Projects', function(Projects, Track, Backbone, Marionette, $, _) {

	Projects.Project = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false,
			archived: false
		},

		isCompleted: function() {
			return this.get('completed');
		},

		isArchived: function() {
			return this.get('archived');
		},

		addTodo: function(todo) {
			console.log('adding todo: ' + todo);
		}
	});

	Projects.ProjectCollection = Backbone.Collection.extend({
		model: Projects.Project
	})
});