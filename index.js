const http = require('http');
const fs = require('fs');
const path = require('path');

const servidor = http.createServer((req, res) => {
  if (req.url === '/style.css') {
    const cssPath = path.join(__dirname, '/static/css', 'style.css');
    
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        
        res.setHeader('Content-Type', 'text/css');
        res.end(data);
      }
    });
  } else if (req.url === '/') {
    const htmlPath = path.join(__dirname, '/templates', 'index.html');
 
    fs.readFile(htmlPath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('File not found');
  }
});

const porta = 3000;

servidor.listen(porta, () => {
  console.log(`O servidor esta rodando na porta ${porta}`);
});
