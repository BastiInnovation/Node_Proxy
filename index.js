// Listen on a specific host via the HOST environment variable
let host = process.env.HOST || 'localhost';
// Listen on a specific port via the PORT environment variable
let port = process.env.PORT || 8081;

let cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});