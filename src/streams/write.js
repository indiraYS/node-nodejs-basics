import { createWriteStream } from 'node:fs';

const write = async () => {
    const writeStream = createWriteStream('files/fileToWrite.txt')
    process.stdin.on('data', (line) => {
        writeStream.write(line);
    })

    process.stdin.on('end', () => {
        writeStream.close()
    })
};


await write();