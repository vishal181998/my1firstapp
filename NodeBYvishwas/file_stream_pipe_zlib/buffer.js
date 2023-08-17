const buffer = new Buffer.from("Vishall","utf-8")

buffer.write("Codesjjjjsjjjsj") // Codealllll it  will override buffer have limited memoey 
console.log(buffer) //<Buffer 56 69 73 68 61 6c>
console.log(buffer.toJSON()) //{ type: 'Buffer', data: [ 86, 105, 115, 104, 97, 108 ] }

console.log(buffer.toString()) //Vishal

//write to buffer

