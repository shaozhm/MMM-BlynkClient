const NodeHelper = require('node_helper');
const {
  getDevices,
  appBasic,
} = require('blynk-client');

const blynkData = require('./blynk');
const login = require('./login');

module.exports = NodeHelper.create({
  start: function() {
    console.log('MMM-BlynkClient started ...');
    this.clients = [];
  },
  connectBlynk: function(config) {
    var self = this;
  },
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'BLYNK_CLIENT') {
      this.connectBlynk(payload);
    }
  }
});