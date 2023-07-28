import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Ulandi"))
//   .catch((error) => console.log("Ulanib bo'lmadi", error));
  
  app.get("/", (req, res) => res.send("Users API-ga xush kelibsiz!"));
  app.all("*", (req, res) =>
    res.send("Siz mavjud bo'lmagan manzilga borishga harakat qildingiz.")
  );
  
  app.listen(port, () =>
    console.log(`Server running on port: http://localhost:${port}`)
  );
