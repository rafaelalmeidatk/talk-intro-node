const http = require('http');

const server = http.createServer(function(req, res) {
  console.log('Recebemos uma requisição!');

  res.write('Hello ');

  setTimeout(function() {
    res.end('World!');
  }, 2000);
});

server.listen(3000);
