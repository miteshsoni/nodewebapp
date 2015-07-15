/**
 * Created by iMitesh on 13/07/15.
 */

var http = require('http');
var fs = require('fs');
var root = __dirname;
var join = require('path').join;
var parse = require('url').parse;

var server = http.createServer( function (req, res){
    var url = parse(req.url);
    var path = join(root, url.pathname);
    res.writeHead({'Content-Type': 'text/html'});
    res.write("Hello World");
    res.end();
});
server.listen(8989);


console.log('Server is now Running');

