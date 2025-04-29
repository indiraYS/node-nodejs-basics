import * as fs from 'fs';

const remove = async () => {
    // Write your code here
    fs.stat('files/fileToRemove.txt', function(err, stat) {
        if (err != null) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        fs.rm('files/fileToRemove.txt', (err_delete) => {
            if (err_delete != null) {
                throw new Error('FS operation failed');
            }
        })
    })
};

await remove();