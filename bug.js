const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Simulate an error
    const data = JSON.parse(req.body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Success' }));
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});