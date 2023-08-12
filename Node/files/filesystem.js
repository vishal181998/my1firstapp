const fs = require('fs')
// fs.readFile('file.txt','utf-8',(err,data)=>
// {
//     if(err){
//         console.log("err message:",err)
//         return
//     }
//     console.log("data:",data.trim(''))
// })
// try {
//   const content = fs.readFileSync('file.txt', 'utf8');
//   console.log('Sync Read:', content);
// } catch (err) {
//   console.error(err);
// }

// fs.writeFile("file.text","i am deAD ",(err)=>{ // if does not have file it will create on new file
//     if(err){
//         console.log("error message:",err)
//         return
//     }
//     console.log("suucess full")
// })
// const contentToWrite = 'Hello, this is content written synchronously!';

// try {
//   fs.writeFileSync('syncFile.txt', contentToWrite, 'utf8');
//   console.log('Data has been written synchronously.');
// } catch (err) {
//   console.error(err);
// }
// fs.open("file.text",'r',(err,fileDescriptor)=>{
//     if(err){
//         console.error("error:",err)
//         return
//     }
//     console.log(fileDescriptor) // The callback function receives the fileDescriptor, which is a unique identifier for the opened file

// })
// fs.open("file.txt",'r',(err,fileDescriptor)=>{
//     if(err){
//         console.error("error:",err)
//         return
//     }
//     console.log(fileDescriptor)

// })
function createfile() {
    fs.open("file.txt","w",(err)=>{
        console.log(err);
    })
}
function loaddata(){
    var data = fs.readFileSync("file.txt",'utf-8');
    console.log(data)
    var data1 = fs.readFileSync("file.txt");
    console.log(data1)
    console.log(data1.toString())
    console.log("reading finished")
}
loaddata();
const filePath ="syncFile.txt";

// Open the file for reading
fs.open(filePath, 'r', (err, fileDescriptor) => {
  if (err) {
    console.error(err);
    return;
  }

  // Buffer to store the read data
  const buffer = Buffer.alloc(1024);

  // Read from the file using the file descriptor
  fs.read(fileDescriptor, buffer, 0, buffer.length, 0, (readErr, bytesRead, readBuffer) => {
    if (readErr) {
      console.error(readErr);
      return;
    }

    // Convert the buffer to a string and print the content
    const content = readBuffer.slice(0, bytesRead).toString('utf8');
    console.log('File content:', content);

    // Close the file when done
    fs.close(fileDescriptor, (closeErr) => {
      if (closeErr) {
        console.error(closeErr);
        return;
      }
      console.log('File closed.');
    });
  });
});