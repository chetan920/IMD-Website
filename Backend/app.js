const users = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "johndoe@example.com",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "janesmith@example.com",
    isActive: false,
  },
  {
    id: 3,
    name: "Sam Johnson",
    age: 22,
    email: "samjohnson@example.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Alice Brown",
    age: 29,
    email: "alicebrown@example.com",
    isActive: false,
  },
];

//    console.log(users);

//  const express = require("express");
//  const cors = require("cors");
//  const mongoose = require("mongoose");
//  const User = require("./User");
//  const app = express();

//  mongoose
//    .connect(
//           "mongodb+srv://chetanwebtakersit:<db_password>@cluster0.r3ken.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 "
//   )
//    .then(() => console.log("DB Connected"))
//    .catch((err) => console.log(err));
//  app.use(express.json());
//  app.use(
//    cors({
//      origin: "http://localhost:5173",
//      // allow requests from this origin only
//      credentials: true,
//    })
//  );

//  app.get("/api/users", async (req, res) => {
//    const userData = await User.find();
//    res.send({ message: "Users fetched successfully!", users: userData });
//  });
//  app.post("/api/users/create", async (req, res) => {
//    const newUsers = req.body;
//    // console.log(typeof newUsers?.number);

//    const user = await User.create(newUsers);
//    return res.send({
//      message: `Welcome ${user?.name}`,
//    });
//  });
//  app.listen(3000, () => {
//    console.log("local server is runnig properly posr 3000");
//  });
const express = require("express");
const mongoose = require("mongoose");
const User = require("./Contact");
const cors = require("cors");
const sendMail = require("./mail");
require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    // allow requests from this origin only
    credentials: true,
  })
);
// Example route
app.get("/api/users", (req, res) => {
  return (
    res.status(200), send({ message: "Users fetched successfully!", users })
  );
});

app.post("/imd/users/create", async (req, res) => {
  console.log(req.body, "BODY");
  // await User.updateMany({}, { $unset: { number: "" } });
  const newUsers = req.body;
  // console.log(typeof newUsers?.number);
  await sendMail(newUsers?.email, newUsers?.message, newUsers?.name);

  const newUser = await User.create(newUsers);
  return res.send({
    message: "add new user",
    newUser,
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
