const mysql = require('mysql')
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'ngantri',
  multipleStatements: true
})
db.connect((err)=>{
  if(err) console.log(err)
  else console.log('berhasil konek db')
})


module.exports = db
