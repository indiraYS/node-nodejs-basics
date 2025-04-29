import * as fs from 'fs';

const copy = async () => {
    // Write your code here
    fs.stat('files', (err, stats) => {
        if (err != null) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        fs.stat('files_copy', (err_cp, stats_cp) => {
            if (err_cp == null) {
                throw new Error('FS operation failed');
            }
        })


        fs.cp('files', 'files_copy', {recursive: true}, (cp_err) => {
            if (cp_err != null) throw new Error('FS operation failed');
        })
    })
};

await copy();
