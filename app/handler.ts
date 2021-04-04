import express from 'express';
import Router from "express"
import serverless from "serverless-http";
import { createEmployeeController } from "./useCases/CreateEmployee"
import { editEmployeeController } from "./useCases/EditEmployee"
import { getEmployeeController } from "./useCases/GetEmployee"
import { deleteEmployeeController } from "./useCases/DeleteEmployee"

const app = express();

app.use(express.json());

const router = Router()


router.get("/employees/:id", async function (req, res) {
  return getEmployeeController.handle(req, res);
});

router.post("/employees", async function (req, res) {
  return createEmployeeController.handle(req, res);

});


router.put("/employees/:id", async function (req, res) {
  return editEmployeeController.handle(req, res);

});


router.delete("/employees/:id", async function (req, res) {
  return deleteEmployeeController.handle(req, res);
});


app.use(router)


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
