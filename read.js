const fs = require("fs");

const filePath = process.argv[2];
const key = process.argv[3];

console.log({ filePath: filePath, key: key });

if (fs.existsSync(filePath)) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    if (key.indexOf(".") > -1) {
      const keys = key.split(".");
      let value = JSON.parse(data);
      for (let i = 0; i < keys.length; i++) {
        value = value[keys[i]];
      }
      console.log(value);
    }
  });
} else {
  return console.log("File does not exist");
}
