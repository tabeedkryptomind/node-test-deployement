var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-node.c32rpklpndhu.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'kryptomind',
  database : 'database-node'
});
 

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
