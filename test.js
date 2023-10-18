const {
  getDevices,
  appBasic,
} = require('blynk-client');

const blynkData = require('./blynk');
const login = require('./login');

const {
  profile,
} = blynkData;

if (profile) {
  const {
    dashBoards,
  } = profile;

  if (dashBoards && Array.isArray(dashBoards) && dashBoards.length) {
    const dashId = dashBoards[0].id;
    const callbackCommand = (blynk, options) => (status) => getDevices.command(blynk, options);
    const callbackThen = () => (data) => {
      const devices = JSON.parse(data);
      console.log('Get Devices: ', devices);
    };
    const clientApp = appBasic(callbackCommand, callbackThen);
    clientApp({
      dashId,
      login,
    });
  }
}
