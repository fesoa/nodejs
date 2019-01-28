// Basic Web server


var http = require('http'); //http 모듈을 http 변수로

// http 모듈의 createServer 함수 호출
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});  // 응답 헤더
    res.end('Hello World'); // end:  응답 본문
}).listen(1337, '0.0.0.0');
console.log('Server running at http://0.0.0.0:1337/');