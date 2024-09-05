USE netflix;

CREATE TABLE user_movies(
fk_movies_idmovies INT,
fk_user_iduser INT
);

ALTER TABLE user_movies ADD FOREIGN KEY (idUser) REFERENCES (fk_user_idUser);