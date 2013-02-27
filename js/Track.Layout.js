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
	})
});