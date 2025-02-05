const http = require('http');
const https = require('https');
const { Readable } = require('stream');

function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(error);
            }
        });
        req.on('error', (error) => reject(error));
    });
}

const server = http.createServer(async (req, res) => {
    if (req.method === 'POST') {
        try {
            const data = await parseBody(req);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Success', data }));
        } catch (error) {
            console.error('Error:', error);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON in request body' }));
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method not allowed');
    }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});