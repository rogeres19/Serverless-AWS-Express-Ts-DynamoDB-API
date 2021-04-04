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



### Documentação

Acesse a documentação com as requisições no link abaixo:

https://documenter.getpostman.com/view/2690272/TzCQaRco#intro


### Requisções


> PARA CRIAR UM FUNCIONÁRIO (Employee)

```bash
curl --request POST 'https://seqm2y6ay7.execute-api.us-east-1.amazonaws.com/dev/employees' --header 'Content-Type: application/json' --data-raw '{"name": "John", "role":"admin","age":56 }'
```

A resposta da requisição será semelhante a:

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

> PARA ATUALIZAR UM FUNCIONÁRIO (Employee)

```bash
curl --location --request PUT 'https://seqm2y6ay7.execute-api.us-east-1.amazonaws.com/dev/employees/b7eb5da0-94e1-11eb-af68-4b16abcead26' \
--data-raw '{
    "name": "outro",
    "role": "admin",
    "age":13
}'
```

A resposta da requisição será semelhante a:

```bash
{
    "createdAt": "2021-04-04T15:18:44.590Z",
    "id": "2981a2b6-0666-4e67-98c0-4bd6eaded08b",
    "role": "admin",
    "name": "outro",
    "updatedAt": "2021-04-04T15:19:41.371Z",
    "age": 13
}
```

> PARA CONSULTAR UM FUNCIONÁRIO (Employee)


Você pode consultar um funcionário pelo `id` com a chamada ao seguinte endpoint:

```bash
curl https://seqm2y6ay7.execute-api.us-east-1.amazonaws.com/dev/employees/idtest
```

Deve retornar a seguinte response:

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

Se tentar consultar um funcionário que não existe, você deverá receber a seguinte resposta:

```bash
{
    "message": "Employee does not exists."
}
```


> PARA APAGAR UM FUNCIONÁRIO (Employee)

Você pode apagar um funcionário pelo `id` com a chamada ao seguinte endpoint:

```bash
curl --location --request DELETE 'seqm2y6ay7.execute-api.us-east-1.amazonaws.com/dev/employees/b7eb5da0-94e-11eb-af68-4b16abcead26' \
--data-raw ''
```

Deve retornar a seguinte response:

```bash
{
    "deleted":"ok"
}
```

Se tentar apagar um funcionário que não existe, você deverá receber a seguinte resposta:

```bash
{
    "message": "Employee does not exists."
}
```

