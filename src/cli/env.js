import process from 'process'
const parseEnv = () => {
    // Write your code here
    let arr = []
    for (let item in process.env) {
        if (item.startsWith('RSS_')) {
            arr.push( item + '=' + process.env[item]);
        }
    }
    console.log(arr.join("; "))
};

parseEnv();