var log4js = require("log4js");
var config = require("../../config/log4js.config.js");
var console, system, application, access;

log4js.configure(config);

console = log4js.getLogger();

system = log4js.getLogger("system");

application = log4js.getLogger("application");

access = log4js.getLogger('access');

module.exports = {
  console,
  system,
  application,
  access
};