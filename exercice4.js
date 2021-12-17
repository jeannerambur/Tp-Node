const http = require('http');
var url = require('url');

const server = http.createServer((req, res) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query); //{Object}
    res.end("Your message: " + query.message);
});

server.listen(3000, () => console.log("Le serveur tourne sur http://localhost:3000"))