import * as fs from 'fs';

const rename = async () => {
    // Write your code here
    fs.stat('files/wrongFilename.txt', (err, stats) => {
        if (err != null) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        fs.stat('files/properFilename.md', (err_prop, stats_prop) => {
            if (err_prop == null) throw new Error('FS operation failed');
        })

        fs.rename('files/wrongFilename.txt', 'files/properFilename.md', (err_rename) => {
            if (err_rename!=null) throw new Error('FS operation failed');
        })
    })
};

await rename();