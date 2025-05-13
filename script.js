n = int(input())
json_object = {}

for _ in range(n):
    key, value = input().split()
    json_object[key] = value

key_to_delete = input()

if key_to_delete in json_object:
    del json_object[key_to_delete]

for key, value in json_object.items():
    print(key, value)



// Dont change the code below

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
let obj = {};
let stringX = '';

let count = 0;

rl.on('line', (line) => {
  count++;

  if(count === 1) {
    n = parseInt(line);
  } else if(count > 1 && count <= n+1) {
    let [key, val] = line.split(' ');
    obj[key] = val;
  } else if(count === n+2) {
    stringX = line;
    rl.close();
  }
});

rl.on('close', () => {
  deleteProperty(obj, stringX)
  for(let key in obj) {
    console.log(${key} ${obj[key]});
  }
});