import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    //pipeline (
    const readable =  createReadStream('files/fileToCalculateHashFor.txt')
    readable.setEncoding('hex')
    readable.on('data', (chunk) => {
        console.log(chunk.toString());
    })
};

await calculateHash();