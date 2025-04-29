import * as fs from 'fs';

const read = async () => {
    fs.stat('files/fileToRead.txt', (err, stats) => {
        if (err != null && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        fs.readFile('files/fileToRead.txt', (err_read, data_read) => {
            if (err_read != null) throw new Error('FS operation failed');
            console.log(data_read.toString())
        })
    })
};

await read();