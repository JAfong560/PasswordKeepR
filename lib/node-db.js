const {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  port: '8080',
  host: 'localhost',
  database: 'midterm'
});


//showing aviable username and passwords
pool
  .query('SELECT * FROM storeAccounts;')
  .then(res => console.log(data.rows)
  .catch(e => console.error(e.stack));



//adding username and password query
pool
  .query('INSERT INTO storeAccounts (user_id, storePass, site_url, category) VALUES (userID, password, url, cat')
  .then(res => console.log(data.rows))
  .catch(e => console.error(e.stack));



//editing username or password
pool
  .query('UPDATE storeAccounts SET storePass = password, site_url = url, category = cat')
  .then(res => console.log(data.rows))
  .catch(e => console.error(e.stack));

//deleting account
pool
  .query('DELETE FROM storeAccounts WHERE account_id = accountIDWAntedToDELETE')
  .then(res => console.log(data.rows))
  .catch(e => console.error(e.stack));
