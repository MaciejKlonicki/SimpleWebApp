--liquibase formatted sql
--changeset mklonicki:2

INSERT INTO TODO (id, username, description, targetDate, done) VALUES (1, 'Mklonicki', 'My desc one', '2022-12-07', false);
INSERT INTO TODO (id, username, description, targetDate, done) VALUES (2, 'Aklonicka', 'My desc two', '2022-12-06', false);