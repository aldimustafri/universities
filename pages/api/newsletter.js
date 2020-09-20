/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-20 23:52:23
 * @modify date 2020-09-20 23:52:23
 * @desc [description]
 */

var fs = require("fs");
var dataApi = "./data/users.json";

function readFile(callback, returnJson = false, filePath = dataApi, encoding = "utf8") {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }
    callback(returnJson ? JSON.parse(data) : data);
  });
}

function writeFile(fileData, callback, filePath = dataApi, encoding = "utf8") {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err;
    }
    callback();
  });
}

export default async (req, res) => {
  const newUser = {
    name: await req.body.name,
    email: await req.body.email,
    address: await req.body.address,
  };

  try {
    readFile((data) => {
      const newUserId = Object.keys(data).length + 1;
      data[newUserId.toString()] = newUser;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new user added");
      });
    }, true);
  } catch (error) {
    console.log(error);
  }
};
