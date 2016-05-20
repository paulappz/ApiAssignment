
// This javascript code uses get to retrieve Website HTTP status code from Codeacademy
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
// Add your code below!
xhr.send();
console.log("COde academy website Status code: "+ xhr.status);
console.log("Status:"+xhr.statusText);