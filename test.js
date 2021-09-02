const fs = require("fs");

const path = require("path");
let i = 17;
getCurrentFilenames();

function getCurrentFilenames() {
  const fileNames = fs.readdirSync(
    path.join(__dirname, "amit-template1/tesim")
  );
  fileNames.sort((a, b) => {
    const numA = a.replace(/.\/|[A-Z|.]|\s/gi, "");
    const numB = b.replace(/.\/|[A-Z|.]|\s/gi, "");
    return parseInt(numA) - parseInt(numB);
  });

  fileNames.forEach((file) => {
    fs.rename(
      path.join(__dirname, "amit-template1/tesim", file),
      path.join(__dirname, "amit-template1/tesim", "right" + i + ".jpg"),
      function (e) {
        console.log(e);
      }
    );
    i++;
  });
}
