/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM storeaccounts;`)
      .then(data => {
        const stores = data.rows;
        res.status(200).render("stores", { stores } )
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/index", (req, res) => {
    const user = 1;
    db.query(`SELECT * FROM storeAccounts;`)
      .then(data => {
        const stores = data.rows;
        res.status(200).render("stores", { stores } )
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
