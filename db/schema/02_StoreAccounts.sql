
DROP TABLE IF EXISTS storeAccounts CASCADE;
CREATE TABLE storeAccounts (
  account_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users (user_id),
  org_id INT REFERENCES organization (org_id),
  site_url VARCHAR(255) NOT NULL,
  social_media VARCHAR(255) NOT NULL,
  work_related VARCHAR(255) NOT NULL
);
