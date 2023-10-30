CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE todo (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  completed BOOLEAN,
  user_id INT,
  date VARCHAR(255),

  FOREIGN KEY (user_id) REFERENCES users (id)
);