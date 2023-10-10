const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
  start: function() {
    console.log('MMM-BlynkClient started ...');
    this.clients = [];
  },
});