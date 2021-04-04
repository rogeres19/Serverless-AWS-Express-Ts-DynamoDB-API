import * as dynamoose from "dynamoose";
import { Document } from "dynamoose/dist/Document";
import { v4 as uuid } from "uuid";
import { config } from "../config/database";
import { Employee } from "../entities/Employee";

const ddb = new dynamoose.aws.sdk.DynamoDB({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region,
});

dynamoose.aws.ddb.set(ddb);

const employeeSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        default: uuid(),
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    });

const model = dynamoose.model<Employee & Document>("employee", employeeSchema);
export { model as EmployeeModel };
