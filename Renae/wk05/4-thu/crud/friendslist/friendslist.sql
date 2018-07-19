CREATE DATABASE friendslist;

CREATE TABLE friends (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100),
  image_url VARCHAR(200),
  phone_number VARCHAR(200)
);

INSERT INTO friends (name, image_url, phone_number) VALUES ('Melanie', 'https://scontent.fmel5-1.fna.fbcdn.net/v/t1.0-9/33087684_10156346064729603_676552233537503232_n.jpg?_nc_cat=0&oh=69de739d8e8c25e86de2e2a19f297b0f&oe=5BD868C4', '0431000000');