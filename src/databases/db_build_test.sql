BEGIN;

DROP TABLE IF EXISTS users, feedback CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  poster_id INT NOT NULL,
  reciever_id INT NOT NULL,
  content VARCHAR(400) NOT NULL
);

INSERT INTO users (first_name, last_name, username, email, password)
VALUES ('test', 'mctest', 'testing', 'testing@test.com', 'testpass'),
('alfred', 'hardy', 'hard_al', 'hard_al@test.com', 'testpassword');

INSERT INTO feedback (poster_id, reciever_id, content)
VALUES (1, 2, 'test feedback');


COMMIT;
