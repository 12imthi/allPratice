var str = 'madam';
var spl = str.split('');

console.log(spl);

var emt = ''; // here i have one doubt

for(var i=spl.length-1;i >=0;i--){
    console.log(i);
    emt += spl[i];
 
    console.log(emt); 
}
if(emt == str) {
    console.log('palindrome');
}
else {
    console.log('not a palindrome');
}

