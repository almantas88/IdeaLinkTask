const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  
    res.send({ text: "Idea Link task Almantas Gaižauskas" });
  });
  

app.post("/", (req, res) => {
    console.log(req.body);
  str = req.body.text;
  newStr = "";
  console.log("Original String: ", str);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== req.body.letter) {
      newStr += str[i];
    }
  }

  console.log("After character removed: ", newStr);

  return res.send({ text: newStr });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`back-end server is running on port ${process.env.PORT || 5000}`);
});
