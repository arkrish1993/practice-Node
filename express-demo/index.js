const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "NodeJS",
  },
];
app.get("/", (req, res) => {
  res.send("Henlo");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) res.status(404).send("Course doesn't exist...");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
