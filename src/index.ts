import * as http from 'http'

import app from './app';

const server = http.createServer(app)

server.listen(3030);
server.on('listening', () => console.log('Listening on port 3030...'));