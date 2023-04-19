const express = require('express');
const path = require("path");
const app = express();

// 静态目录
app.use(express.static(path.join(__dirname, 'dist')));


app.listen(8888, () => console.log('App listening on port 8888!'));