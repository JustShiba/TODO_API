require('dotenv').config();
const app = require('./app');

const port = parseInt(process.env.PORT, 10) || '7500';

app.listen(port, () => {
  console.log(process.env);
  console.log('\x1b[36m%s\x1b[0m', `Server is running at: http://localhost:${port}`);
});
