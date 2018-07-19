CREATE DATABASE movie_database_search;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  poster VARCHAR(400),
  director VARCHAR(200),
  year INTEGER,
  rated VARCHAR(100),
  country VARCHAR(200),
  ratings VARCHAR(100),
  boxoffice VARCHAR(100),
  plot VARCHAR(500),
  imdbID VARCHAR(200)
);

-- INSERT INTO movies(title, poster, director, year, rated, country, ratings, boxoffice, plot, imdbID) VALUES ('Jawssss','https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', 'Steven Speilberg', 1975, 'PG', 'USA','87/100', 'N/A', 'A local sheriff, a marine biologist and an old seafarer team up to hunt down a great white shark wrecking havoc in a beach resort.', 't0073195');