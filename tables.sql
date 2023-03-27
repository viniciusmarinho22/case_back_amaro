-- Active: 1663287971562@@35.226.146.116@3306@hooks-4313661-vinicius-marinho

CREATE TABLE IF NOT EXISTS Products_amaro (
    id INT PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    tags VARCHAR(255) NOT NULL
);

DROP TABLE Products_amaro;
