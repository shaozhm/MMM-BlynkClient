const NodeHelper = require('node_helper');
const Lodash = require('lodash');
const {
  getDevices,
  appBasic,
} = require('blynk-client');

const blynkData = require('./blynk');

module.exports = NodeHelper.create({
  start: function() {
    console.log('MMM-BlynkClient started ...');
    this.clients = [];
  },
  connectBlynk: function(config) {
    var self = this;
    const {
      profile,
    } = blynkData;
    if (profile) {
      const {
        dashBoards,
      } = profile;
    
      if (dashBoards && Array.isArray(dashBoards) && dashBoards.length) {
        const dashboard = Lodash.find(dashBoards, {
          name: config.dashboard,
        })
        if (dashboard && dashboard.id) {
          const dashId = dashboard.id;
          const callbackCommand = (blynk, options) => (status) => getDevices.command(blynk, options);
          const callbackThen = () => (data) => {
            const devices = JSON.parse(data);
            console.log('Get Devices: ', devices);
          };
          const clientApp = appBasic(callbackCommand, callbackThen);
          clientApp({
            dashId,
            login: config.login,
          });
        }
      }
    }
  },
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'BLYNK_CLIENT') {
      this.connectBlynk(payload);
    }
  }
});
