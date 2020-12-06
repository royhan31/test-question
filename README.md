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
  * method = get localhost:3000/question?size=5&page=1
  * size = json data length (default = 5) not required
  * page = page that will be addressed not required

2. create question
  * method = post localhost:3000/question
  * body parameters (question & author)

3. update question
  * method = put localhost:3000/question/{uuid}
  * body parameters (question & author)

4. delete question
  * method = delete localhost:3000/question/{uuid}

5. details the question by uuid
  * method = get localhost:3000/question/{uuid}

## Swagger UI
  swagger ui endpoint = localhost:3000/question/api-docs

  or using live swagger ui

  https://test-question-app.herokuapp.com/api-docs/
  * please using https not http

## License
[MIT](https://choosealicense.com/licenses/mit/)
