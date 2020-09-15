let fs = require('fs');  


fs.writeFile('./parte1/prueba.txt', 'otro holis',(err) => {  //uso de metodo para escribir info en archivo 
  if (err) {
    return console.error(err);
  }
});
fs.readFile('prueba.txt', 'utf-8', (err, data) => {  //uso de metodo para leer info en archivo 
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});

fs.readFile('prueba.txt', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });

  fs.readFile('noExiste.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });
  

//   fs.readFileSync('prueba.txt', 'utf-8', (err, data) => {
//     if(err) {
//       console.log('error: ', err);
//     } else {
//       console.log(data);
//     }
//   });
  
//   fs.readFileSync('prueba.txt', (err, data) => {
//       if(err) {
//         console.log('error: ', err);
//       } else {
//         console.log(data);
//       }
//     });
  
//     fs.readFileSync('noExiste.txt', 'utf-8', (err, data) => {
//       if(err) {
//         console.log('error: ', err);
//       } else {
//         console.log(data);
//       }
//     });