
DROP TABLE IF EXISTS storeAccounts CASCADE;
CREATE TABLE storeAccounts (
  account_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id),
  org_id INT REFERENCES organization(org_id),
  storedPass VARCHAR(255) NOT NULL,
  site_url VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
);
