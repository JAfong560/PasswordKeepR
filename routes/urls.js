const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // Redirect to URL
  router.get("/", (req, res) => {
    const { site_url } = req.body;
    console.log(site_url)
    res.status(301).redirect(`http://${site_url}`);
  });

  router.post("/", (req, res) => {
    const { site_url } = req.body;
    console.log(site_url)
    res.status(301).redirect(`http://${site_url}`);
  });

  return router;
};
