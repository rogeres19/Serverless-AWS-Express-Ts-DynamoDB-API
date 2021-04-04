# Desafio Serverless AWS Express DynamoDB API for Employees



## Tecnologias utilizadas
----
Principais tecnologias utilizadas no código.

[Node.js](https://nodejs.org/)

[Typescript](https://www.typescriptlang.org/)

[AWS-DynamoDB](https://aws.amazon.com/pt/dynamodb/)

[Serverless](https://www.serverless.com/)

[AWS-Lambda](https://aws.amazon.com/pt/lambda/)

[Github ](https://github.com/)


## Usage

### Deployment

### Requisções

```bash
curl --request POST 'https://xxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees' --header 'Content-Type: application/json' --data-raw '{"name": "John", "role":"admin","age":56 }'
```

Which should result in the following response:

```bash
{
    "createdAt": "2021-04-04T15:18:44.590Z",
    "id": "2981a2b6-0666-4e67-98c0-4bd6eaded08b",
    "role": "admin",
    "name": "John",
    "updatedAt": "2021-04-04T15:19:41.371Z",
    "age": 56
}
```

You can later retrieve the employee by `id` by calling the following endpoint:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees/idtest
```

Which should result in the following response:

```bash
{
    "createdAt": "2021-04-04T01:05:36.620Z",
    "id": "idtest",
    "role": "admin",
    "name": "outro",
    "updatedAt": "2021-04-04T02:41:14.524Z",
    "age": 33
}
```

If you try to retrieve employee that does not exist, you should receive the following response:

```bash
{
    "message": "Employee does not exists."
}
```
