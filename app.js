const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const users = [];

app.post("/submit", (req, res) => {
  // body = {name: "Ahmed", email: "ss@hotmail.com"}
  users.push({ name: req.body.name, email: req.body.email });
  console.log(users);

  res.redirect("/");
});

const courses = [
  {
    id: 1,
    name: "Introduction to ExpressJS",
    description:
      "This course will teach you the basics of ExpressJS, a popular JavaScript framework for building web applications.",
    prerequisites: [],
    duration: "10 hours",
    cost: 99,
  },
  {
    id: 2,
    name: "Getting Started with ExpressJS",
    description:
      "This course will teach you how to install ExpressJS, create a new ExpressJS project, and run an ExpressJS project.",
    prerequisites: ["Introduction to ExpressJS"],
    duration: "5 hours",
    cost: 49,
  },
  {
    id: 3,
    name: "Building a Basic ExpressJS Web App",
    description:
      "This course will teach you how to create a basic ExpressJS web app. You will learn how to handle HTTP requests, render HTML templates, and work with cookies and sessions.",
    prerequisites: ["Getting Started with ExpressJS"],
    duration: "10 hours",
    cost: 99,
  },
  {
    id: 4,
    name: "Advanced ExpressJS Topics",
    description:
      "This course will teach you advanced topics in ExpressJS, such as authentication and authorization, database integration, unit testing, and deployment.",
    prerequisites: ["Building a Basic ExpressJS Web App"],
    duration: "15 hours",
    cost: 149,
  },
];

app.get("/api/v1/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/v1/courses/1", (req, res) => {
    res.json(courses[0]);
});

app.get("/fetchy", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "fetchy.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
