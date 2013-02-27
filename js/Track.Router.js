var Router = Backbone.Marionette.AppRouter.extend({
	appRoutes: {
		"/": "main"
	},

	controller: {
		main: function() {
			console.log("main route hit");
			// 
		}
	}
	
});