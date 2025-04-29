import path from 'node:path';
import { release, version } from 'os';
import {createServer} from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';

// require('./files/c.cjs');

const random = Math.random();


let objectFile;
if (random > 0.5) {
    objectFile = './files/a.json';
} else {
    objectFile = './files/b.json';
}
const unknownObject = fs.readFileSync(objectFile, { encoding: 'utf8' });


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const __filename = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${__filename}`);
const __dirname = dirname(__filename);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default { unknownObject, myServer };

