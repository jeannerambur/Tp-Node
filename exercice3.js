const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end(JSON.stringify({
        "firstname": "Jeanne",
        "lastname": "Rmb",
        "birthdate": "28/09/1996",
        "color": "blue"
    }));
});

server.listen(3000, () => console.log("Le serveur tourne sur http://localhost:3000"))