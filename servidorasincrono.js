const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    fs.readFile("archivo.txt", "utf8", (err, data) => {

        const fecha = new Date().toISOString();
        const metodo = req.method;
        const url = req.url;
        const ip = req.socket.remoteAddress;

        console.log(`[${fecha}] ${metodo} ${url} - IP: ${ip}`);
        if (err) {
            res.writeHead(500);
            res.end("Error leyendo el archivo");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
    });

});

server.listen(3000, () => {
    console.log("Servidor asíncrono en http://localhost:3000");
});