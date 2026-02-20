const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const contenido = fs.readFileSync("archivo.txt", "utf8");

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(contenido);
});

server.listen(3000, () => {
    console.log("Servidor síncrono en http://localhost:3000");
});