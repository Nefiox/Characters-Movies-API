CREATE DATABASE disney_db;
USE disney_db;

create table movies (
	id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	image VARCHAR(100),
	title VARCHAR(50) NOT NULL,
	release_date DATE NOT NULL,
	rating DECIMAL(3,1) UNSIGNED NOT NULL,
	genre_id INT(10) UNSIGNED NOT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

create table characters (
	id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	image VARCHAR(100),
	age INT(10) NOT NULL,
	weight DECIMAL(4,2) NOT NULL,
	story VARCHAR(200) NOT NULL,
	movie_id INT(10) UNSIGNED NOT NULL,
	first_appearance DATE NOT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

create table character_movie (
	id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	movie_id INT(10) UNSIGNED NOT NULL,
	character_id INT(10) UNSIGNED NOT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

create table genres (
	id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	image VARCHAR(100),
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL
);