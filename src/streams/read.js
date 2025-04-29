import { createReadStream } from 'node:fs';

const read = async () => {
    const readable =  createReadStream('files/fileToRead.txt')
    readable.setEncoding('utf8')
    readable.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();