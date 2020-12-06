# Question open API

Question is Api for test CRUD

## Installation
install node_modules

```bash
  npm install
```

## Enviroment
* copy or rename .env.example to .env
* change connection database to mysql or postgres

run migration using sequelize

```bash
  sequelize db:migrate
```

## Usage

run the question

```bash
  node index.js
```

or

```bash
  nodemon index.js
```
* need nodemon please intsall first (npm i nodemon)

## Endpoint API

1. get all question using pagination
  method = get
  http://localhost:3000/question?size=5&page=1

  size = json data length (default = 5)
  page = page that will be addressed
