import express, { Request, Response, Application } from "express";
const app: Application = express();
app.use(express.json());
interface person {
  id: number;
  name: string;
  age: number;
}

const data: person[] = require("../data.json");
const port: number = 3000;

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send("It works").end();
});

app.get("/users", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => res.status(200).send(json));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.status(200).json({ name: "Rayan" });
  res.end();
});

app.post("/users", (req, res) => {
  res.status(200).json({ name: "khalid" });
  res.end();
});

app.put("/users", (req, res) => {
  res.status(200).json({ name: "Abdullah" });
  res.end();
});

app.delete("/users", (req, res) => {
  res.status(200).json({ name: "abdullah" });
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const fun1 = (req, res, next) => {
//   console.log("hello");
//   next();
// };

// const fun2 = (req, res) => {
//   res.status(200).send("<h1>Hello to funcrion 2</h1>");
// };

// app.get("/", fun1, fun2);

// app.use((req, res, next) => {
//   console.log("hello from use()");
//   next();
// });

// const check = (req, res, next) => {
//   if (req.query.isAdmin == "true") {
//     res.status(200).send(`<h1>You are Welcome</h1>`);
//   } else {
//     res.status(200).send(`<h1>You are NOT WELCOME!!!!</h1>`);
//   }
// };

// ========================== CRUD =====================
// app.post("/users", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const age = req.body.age;
//   data.push({
//     id: id,
//     name: name,
//     age: age,
//   });
//   res.status(200).send(`${name} has changed successfuly
//   ${res.json(data)}`);
//   res.end();
// });

// app.get("/users", (req: Request, res: Response) => {
//   res.status(200).send(data);
//   res.end();
// });

// app.put("/users/:name", (req, res, next) => {
//   data.map((person) => {
//     if (person.name == req.params.name) {
//       person.age = req.query.age;
//       res.status(200).send(`${person.name} has changed successfuly`);
//     }
//   });
//   console.log(data);
//   res.end();
// });

// app.delete("/users/:id", (req, res, next) => {
//   const personId = req.params.id;
//   data.map((person, index) => {
//     if (person.id == personId) {
//       data.splice(index, 1);
//       res.status(200).send(`${person.name} has Deleted successfuly`);
//     }
//   });
//   console.log(data);
//   res.end();
// });
