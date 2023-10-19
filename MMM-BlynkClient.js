Module.register("MMM-BlynkClient",{
  defaults: {
		username: 'shaozhm@gmail.com',
		password: 'admin',
    blynkServer: 'sonos.local',
    tls: true,
    port: 9443,
		dashboard: 'MUSICBOX',
  },
	start: function() {
    Log.info('Starting module: ' + this.name);
		const self = this;
    self.sendSocketNotification('BLYNK_CLIENT', {
      login: {
				blynkServer: self.config.blynkServer,
      	username: self.config.username,
				password: self.config.password,
				tls: self.config.tls,
				port: self.config.port,
			},
			dashboard: self.config.dashboard,
    });
		setInterval(() => {
			this.updateDom(0);
		}, 1000);
	},
  socketNotificationReceived: function(notification, payload){
		if (notification === 'GET_DEVICES') {
			
		}
  },
  getDom: function() {
		var self = this;
		var wrapper = document.createElement("div");
		return wrapper;
  },
  getStyles: function() {
		return [
			"MMM-BlynkClient.css",
		];
  },
});