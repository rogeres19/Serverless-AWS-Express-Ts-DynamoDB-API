# Serverless AWS Express DynamoDB API for Employees



## Tecnologias utilizadas
----
Principais tecnologias utilizadas no código.

[Node.js](https://nodejs.org/)

[Typescript](https://www.typescriptlang.org/)

[Jest](https://jestjs.io/)

[AWS-DynamoDB](https://aws.amazon.com/pt/dynamodb/)

[Serverless](https://www.serverless.com/)

[AWS-Lambda] (https://aws.amazon.com/pt/lambda/)

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

### Local development

It is also possible to emulate DynamodB, API Gateway and Lambda locally by using `serverless-dynamodb-local` and `serverless-offline` plugins. In order to do that, execute the following commands:

```bash
serverless plugin install -n serverless-dynamodb-local
serverless plugin install -n serverless-offline
```

It will add both plugins to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`. Make sure that `serverless-offline` is listed as last plugin in `plugins` section:

```
plugins:
  - serverless-dynamodb-local
  - serverless-offline
```

You should also add the following config to `custom` section in `serverless.yml`:

```
custom:
  (...)
  dynamodb:
    start:
      migrate: true
    stages:
      - dev
```

Additionally, we need to reconfigure `AWS.DynamoDB.DocumentClient` to connect to our local instance of DynamoDB. We can take advantage of `IS_OFFLINE` environment variable set by `serverless-offline` plugin and replace:

```javascript
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
```

with the following:

```javascript
const dynamoDbClientParams = {};
if (process.env.IS_OFFLINE) {
  dynamoDbClientParams.region = 'localhost'
  dynamoDbClientParams.endpoint = 'http://localhost:8000'
}
const dynamoDbClient = new AWS.DynamoDB.DocumentClient(dynamoDbClientParams);
```

After that, running the following command with start both local API Gateway emulator as well as local instance of emulated DynamoDB:

```bash
serverless offline start
```

To learn more about the capabilities of `serverless-offline` and `serverless-dynamodb-local`, please refer to their corresponding GitHub repositories:
- https://github.com/dherault/serverless-offline
- https://github.com/99x/serverless-dynamodb-local