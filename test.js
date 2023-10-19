const Lodash = require('lodash');
const {
  getDevices,
  appBasic,
} = require('blynk-client');

const blynkData = require('./blynk');
const login = require('./login');
const dashName = 'MUSICBOX';

const {
  profile,
} = blynkData;

if (profile) {
  const {
    dashBoards,
  } = profile;

  if (dashBoards && Array.isArray(dashBoards) && dashBoards.length) {
    const dashboard = Lodash.find(dashBoards, {
      name: dashName,
    });
    if (dashboard && dashboard.id) {
      const dashId = dashboard.id;
      const callbackCommand = (blynk, options) => (status) => getDevices.command(blynk, options);
      const callbackThen = () => (data) => {
        const devices = JSON.parse(data);
        console.log('Get Devices: ', devices);
      };
      const clientApp = appBasic(callbackCommand, callbackThen);
      clientApp({
        dashId: '105',
        login,
      });
    }
  }
}
