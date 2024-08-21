// 获取环境变量，所有传给github action的参数一律大写，且需要加上INPUT_前缀，此处是github规定的
let para1 = process.env['INPUT_PARA1'];
let para2 = process.env['INPUT_PARA2']; 
// 输出到环境中
console.log(`para1 is ${para1}, para2 is ${para2}`);

// 以下是本地执行的代码
console.log(`11111111111`);

const ls = require('child_process').exec('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});