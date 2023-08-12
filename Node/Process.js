console.log("Node.js executable:",process.argv[0])
console.log("script ecuting",process.argv[1])//it is array so 

//console.log("environment variable path ",process.env.PATH) // all deatails of enivronmental variable

console.log("currenty dir",process.cwd())
// process.on('exit', (code) => {
//   console.log('Exiting with code:', code);
// });

// process.nextTick(()=>{
//     console.log("next tick cllbavkl")
// });
// console.log('Waiting for next tick...');
process.stdout.write('Hello, ');
process.stderr.write('Error! ');
process.stdin.write('Hello, ');
process.stdin.setEncoding('utf8');

console.log('Please enter your name: ');

process.stdin.on('data', (data) => {
  const name = data.trim(); // Remove any leading/trailing whitespace or newlines
  console.log(`Hello, ${name}!`);
  process.exit(); // Terminate the process
});




