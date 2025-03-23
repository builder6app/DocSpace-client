const express = require('express');
const path = require('path');

const app = express();

// 指定端口号, 默认使用环节变量中的PORT，否则使用3000
const PORT = process.env.PORT || 3000;

// 中间件来解析请求路径到/docs
app.use('/', express.static(path.join(__dirname, 'dist')));

// 为了支持客户端路由，你可能需要将所有路径重定向到 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});