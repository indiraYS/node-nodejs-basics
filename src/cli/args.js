import process from 'process'

const parseArgs = () => {
    var args = []
    for (var i=0;i<process.argv.length;i++) {
        if (process.argv[i].startsWith('--')) {
            const pair = process.argv[i].split("=")
            args.push(pair[0].replace('--', '') + " is " + pair[1])
        }
    }
    console.log(args.join(", "))
};

parseArgs();