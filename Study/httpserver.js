const http = require('http');   // 모듈 불러오기

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { //http 모듈의 createServer 함수
  res.statusCode = 200;     //res.writeHead(200, {'Content-Type': 'text/html'})으로 하기도 함
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
