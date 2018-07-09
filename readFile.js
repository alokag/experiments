var fs = require('fs');

var readFileStr = function (res) {
    fs.readFile('demofile.html', function(err, data) {       
         res.write( data);        
      });
};
exports.readFileStr = readFileStr;
