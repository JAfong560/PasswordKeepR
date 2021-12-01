// PG database client/connection setup
/* const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

function getUserWithId(id, callback) {
  db.query('SELECT * FROM storeAccounts ', [id], (err, res) => {
    console.log(err ? err.stack : res.rows)
    callback(res.rows);
  })
};

export.default = { getUserWithId }
 */
