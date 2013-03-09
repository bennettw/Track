var Layout = Track.module('Layout', function(Layout, Track, Backbone, Marionette, $, _) {

	Layout.ProjectHeaderView = Backbone.Marionette.ItemView.extend({
		tagName: 'li',
		template: '#template-project-header-view'
	});

	Layout.Header = Backbone.Marionette.CollectionView.extend({
		tagName: 'ul',
		className: 'nav',
		itemView: Layout.ProjectHeaderView,
		//template: '#template-header',

		ui: {
			// none
		}
	});

	Layout.TodoListItemView = Backbone.Marionette.ItemView.extend({
		tagName: 'li',
		template: '#template-todo-list-item'
		/*
		template: function(serialized_model) {
			var title = serialized_model.title;
			var slug = serialized_model.slug;
			return _.template('#template-todo-list-item', {
				title: title,
				slug: slug
			});
		}*/
	});

	Layout.TodoListView = Backbone.Marionette.CollectionView.extend({
		tagName: 'ul',
		itemView: Layout.TodoListItemView
	});

	Layout.ProjectCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#template-todo-list',
		itemView: Layout.TodoListItemView 
	})
});