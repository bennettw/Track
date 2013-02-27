var Layout = Track.module('Layout', function(Layout, Track, Backbone, Marionette, $, _) {

	Layout.Header = Backbone.Marionette.ItemView.extend({
		template: '#template-header',

		ui: {
			// none
		}
	})
});