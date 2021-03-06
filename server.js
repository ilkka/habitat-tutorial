var http = require('http');
var nconf = require('nconf');

nconf.file({ file: 'config/config.json' });

var handleRequest = function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(nconf.get('message'));
}

var www = http.createServer(handleRequest);
var port = nconf.get('port');
www.listen(port, function() {
    console.log('Running on http://0.0.0.0:%d', port);
});
