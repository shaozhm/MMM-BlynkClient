Module.register("MMM-BlynkClient",{
	start: function() {
    Log.info('Starting module: ' + this.name);
		setInterval(() => {
			this.updateDom(0);
		}, 1000);
	},
  socketNotificationReceived: function(notification, payload){
  },
  getDom: function() {
  },
  getStyles: function() {
		return [
			"MMM-BlynkClient.css",
		];
  },
});