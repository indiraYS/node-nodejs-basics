import * as fs from 'fs';

const create = async () => {
    fs.stat('fresh.txt', function(err, stat) {
        if (err == null) {
            throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
            // file does not exist
            fs.writeFile('fresh.txt', 'I am fresh and young', (error) => {
                if (error) {
                    console.log('something went wrong during write file', error)
                }
            });
        } else {
            console.log('Some other error: ', err.code);
        }
    });
};

await create();