--liquibase formatted sql
--changeset mklonicki:1

CREATE TABLE TODO (
    id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    targetDate DATE,
    done BOOLEAN
);

CREATE SEQUENCE todo_id_sequence
    INCREMENT BY 1
    START WITH 1;
