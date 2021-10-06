var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
    if(90<a<100)
        console.log('A')
    if(80<a<90)
        console.log('B')
    if(70<a<80)
        console.log('C')
    if(60<a<70)
        console.log('D')
    else
        console.log('F')