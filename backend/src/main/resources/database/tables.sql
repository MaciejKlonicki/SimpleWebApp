--liquibase formatted sql
--changeset mklonicki:10

CREATE TABLE TODO (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    done VARCHAR(50) NOT NULL
);
