var Layout = Track.module('Layout', function(Layout, Track, Backbone, Marionette, $, _) {

	Layout.ProjectHeaderView = Backbone.Marionette.ItemView.extend({
		template: '#template-project-header-view'
	});

	Layout.Header = Backbone.Marionette.CollectionView.extend({
		itemView: Layout.ProjectHeaderView,
		//template: '#template-header',

		ui: {
			// none
		}

		// how do i pass a collection into this view
	})
});