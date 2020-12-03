const app = require('./server'), MY_PORT = process.env.PORT;

app.listen(MY_PORT, () => {
  console.log(`App listening at http://localhost: ${MY_PORT}`)
});
