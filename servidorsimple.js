const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo desde servidor HTTP con servidor Node.js");
});

server.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});