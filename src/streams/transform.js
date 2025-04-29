import {
    Transform,
} from 'node:stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join('') +"\n");
        callback();
    },
});

const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
