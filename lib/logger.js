var logger = exports;
var clc = require('cli-color');

var styles = {
  heading: clc.blue.bold,
  normal: clc.black
}

logger.setup = function () {
  // Support multiple output types later
};

logger.log = function (options) {
  var type = options.type || "normal";
  console.log(styles[type](options.text));
};