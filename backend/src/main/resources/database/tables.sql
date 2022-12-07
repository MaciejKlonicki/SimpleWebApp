--liquibase formatted sql
--changeset mklonicki:5

CREATE TABLE TODO (
    id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    done VARCHAR(50) NOT NULL
);

CREATE SEQUENCE todo_id_sequence
    INCREMENT BY 1
    START WITH 1;
