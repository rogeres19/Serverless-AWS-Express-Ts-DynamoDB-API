import express, { Router } from "express";
import serverless from "serverless-http";
import { createEmployeeController } from "./useCases/CreateEmployee";
import { deleteEmployeeController } from "./useCases/DeleteEmployee";
import { editEmployeeController } from "./useCases/EditEmployee";
import { getEmployeeController } from "./useCases/GetEmployee";

const app = express();

app.use(express.json());

const router = Router();


router.get("/employees/:id", (req, res) => {
  return getEmployeeController.handle(req, res);
});

router.post("/employees", (req, res) => {
  return createEmployeeController.handle(req, res);

});


router.put("/employees/:id", (req, res) => {
  return editEmployeeController.handle(req, res);

});


router.delete("/employees/:id", (req, res) => {
  return deleteEmployeeController.handle(req, res);
});


app.use(router);


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
