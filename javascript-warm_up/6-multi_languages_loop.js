const myVar = "C is fun\nPython is cool\nJavaScript is amazing";
const lines = myVar.split("\n");

let i = 0;

while(i < lines.length){
    console.log(lines[i]);
    i++;
}