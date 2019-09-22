const express = require("express");
const Mahalap = require("./maha-lap");
const app = express();
const prot = 3000;

app.get("/", (req, res) => res.send("เจริญพรจ้า"));
app.use("/public", express.static("public"));

// app.get("/public", express.static("public"));

app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;
  const theHolyNumber = Mahalap.namo(day, story, time);
  res.json({
    result: theHolyNumber
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
