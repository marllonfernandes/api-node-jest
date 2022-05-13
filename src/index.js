const app = require('./server');
const port = process.env.PORT || 3333;

app.listen(3333, () => console.log(`Server is running port ${port}`));