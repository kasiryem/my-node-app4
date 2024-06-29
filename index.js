const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! welcome to the deployment Master class. One of the best classes i have ever heard');
});

app.listen(PORT, () => {
 console.log('Server is running on port ${PORT}');
});