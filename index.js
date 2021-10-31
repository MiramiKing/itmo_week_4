const http = require('http');
const port = process.env.PORT || 3000;
let CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers':
        'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
};

http.Server((req, res) => {
    if (req.url === '/result4/' && (req.method === 'GET' || req.method === 'POST')) {
        let result = {
            'message': 'itmo337560',
            'x-result': req?.headers?.['x-test'],
            'x-body': req?.body
        };

        res.writeHead(200, {...CORS, 'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));


    }
    else {
        res.end('OK');
    }
}).listen(port)