CREATE DATABASE post1seq;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE friends (
    id uuid DEFAULT uuid_generate_v4(),
    first VARCHAR(255),
    last VARCHAR(255),
    age INTEGER,
    info TEXT,
    PRIMARY KEY (id)
);



