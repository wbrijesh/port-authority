const fs = require("fs");

const filePath = process.argv[2];
var key = process.argv[3];
const value = process.argv[4];

const updateObject = (key, value, obj) => {
  const keys = key.split(".");
  let lastKey = keys.pop();
  let lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
  lastObj[lastKey] = value;
};

function containsDot(str) {
  return str.indexOf(".") > -1;
}

let fileContent = {};

console.log({ filePath: filePath, key: key, value: value });

if (fs.existsSync(filePath)) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    content = data;
    fileContent = JSON.parse(content);
    containsDot(key)
      ? updateObject(key, value, fileContent)
      : (fileContent[key] = value);

    fs.writeFile(filePath, JSON.stringify(fileContent), function (err) {
      null;
    });
  });
} else {
  return console.log("File does not exist");
}
