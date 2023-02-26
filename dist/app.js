"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const data = require("./data.json");
const port = 3000;
app.get("/users", (req, res) => {
    res.status(200).send(data).end();
});
app.post("/users", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    data.push({
        id: id,
        name: name,
        age: age,
    });
    res.status(200).send(`${name} has changed successfuly
  ${res.json(data)}`);
    res.end();
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/users", (req, res) => {
//   res.status(200).json({ name: "Rayan" });
//   res.end();
// });
// app.post("/users", (req, res) => {
//   res.status(200).json({ name: "khalid" });
//   res.end();
// });
// app.put("/users", (req, res) => {
//   res.status(200).json({ name: "Abdullah" });
//   res.end();
// });
// app.delete("/users", (req, res) => {
//   res.status(200).json({ name: "abdullah" });
//   res.end();
// });
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
// app.get("/add/:num1/:num2", (req, res) => {
//   const number1 = Number(req.params.num1);
//   const number2 = Number(req.params.num2);
//   const resulte = number1 + number2;
//   res.status(200).send(`<h1> ${number1} + ${number2} = ${resulte}</h1>`);
//   res.end();
// });
// app.get("/sub/:num1/:num2", (req, res) => {
//   const number1 = Number(req.params.num1);
//   const number2 = Number(req.params.num2);
//   const resulte = number1 - number2;
//   res.status(200).send(`<h1> ${number1} - ${number2} = ${resulte}</h1>`);
//   res.end();
// });
// app.get("/mul/:num1/:num2", (req, res) => {
//   const number1 = Number(req.params.num1);
//   const number2 = Number(req.params.num2);
//   const resulte = number1 * number2;
//   res.status(200).send(`<h1> ${number1} * ${number2} = ${resulte}</h1>`);
//   res.end();
// });
// app.get("/div/:num1/:num2", (req, res) => {
//   const number1 = Number(req.params.num1);
//   const number2 = Number(req.params.num2);
//   if (number2 === 0) {
//     res.status(200).send(`<h1>You can't divide by Zero!!!!!!!</h1>`);
//   } else {
//     res.status(200).send(`<h1> ${number1} / ${number2} = ${resulte}`);
//   }
//   const resulte = number1 / number2;
//   res.status(200).send(`<h1> ${number1} / ${number2} = ${resulte}</h1>`);
//   res.end();
// });
// const check = (req, res, next) => {
//   if (req.query.isAdmin == "true") {
//     res.status(200).send(`<h1>You are Welcome</h1>`);
//   } else {
//     res.status(200).send(`<h1>You are NOT WELCOME!!!!</h1>`);
//   }
// };
//======================================================
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
