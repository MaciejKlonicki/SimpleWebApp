--liquibase formatted sql
--changeset mklonicki:6

INSERT INTO TODO (id, title, description, done) VALUES (1, 'Do lunch', 'My desc one', 'FALSE');
INSERT INTO TODO (id, title, description, done) VALUES (2, 'Do dinner', 'My desc two', 'DONE');