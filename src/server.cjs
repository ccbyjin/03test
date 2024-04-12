const express = require('express');
const sql = require('mssql');
const app = express();
const port = 5173;

// sql server 設定
const config = {
  user: 'sqlap',
  password: 'Ubot@1234',
  server: '172.16.45.213',
  database: 'list',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// 建立連接
async function connectToSqlServer(){
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Error connecting to SQL Server', err);
  }
}

connectToSqlServer();

// 路由設定
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${ port }`);
});

