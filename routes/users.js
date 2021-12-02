/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // Default display erverything
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM storeaccounts JOIN organization ON storeaccounts.org_id = organization.org_id JOIN users ON storeaccounts.user_id = users.id;`)
      .then(data => {
        // console.log(data)
        const stores = data.rows;
        // console.log(stores);
        res.status(200).render("index", { stores } )
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

/*   router.post("/", (req, res) => {
    res.redirect("/index")
  }) */

  //Create new account
  router.post("/", (req, res) => {
    // console.log(req.body)

    const querystring = "INSERT INTO storeAccounts (account_id, user_id, org_id, storedPass, site_url, category) VALUES ($1, $2, $3, $4, $5, $6); ";

    let account_id = Math.floor(Math.random() * 100)

    const values = [account_id, 2, req.body.inputOrg, req.body.inputPass, req.body.inputURL, req.body.inputCat];
    // console.log(values)
    db.query(querystring, values)
    .then(data => {
      console.log("new user!")
      res.redirect("/index");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


  // Redirect to URL
  router.post("/u/:store.site_url", (req, res) => {
    const { site_url } = req.params;
    res.redirect(`http://${site_url}`);
  });


  return router;
};
