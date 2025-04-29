import * as fs from 'fs';

const list = async () => {

    fs.stat('files', (err, stats) => {
        if (err != null) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }
        fs.readdir('files', (err_dir, list) => {
            console.log(list)
        })
    })
};

await list();