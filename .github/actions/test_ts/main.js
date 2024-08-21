// 获取环境变量，所有传给github action的参数一律大写，且需要加上INPUT_前缀，此处是github规定的
let para1 = process.env['INPUT_PARA1'];
let para2 = process.env['INPUT_PARA2']; 
// 输出到环境中
console.log(`para1 is ${para1}, para2 is ${para2}`);

// 以下是本地执行的代码
console.log(`2222222222`);

const main_sleep2 = require('child_process').exec('python src/main_sleep2.py');

main_sleep2.stdout.on('data', (data) => {
  console.log(`main_sleep2.stdout: ${data}`);
});

main_sleep2.stderr.on('data', (data) => {
  console.log(`main_sleep2.stderr: ${data}`);
});

main_sleep2.on('exit', (code) => {
  console.log(`main_sleep2 child process exited with code ${code}`);
});

// 以下是本地执行的代码
console.log(`11111111111`);

const main_sleep1 = require('child_process').exec('python src/main_sleep1.py');

main_sleep1.stdout.on('data', (data) => {
  console.log(`main_sleep1.stdout: ${data}`);
});

main_sleep1.stderr.on('data', (data) => {
  console.log(`main_sleep1.stderr: ${data}`);
});

main_sleep1.on('exit', (code) => {
  console.log(`main_sleep1 child process exited with code ${code}`);
});