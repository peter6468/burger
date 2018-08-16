-- Drops the animals_db if it exists currently -- 
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "animals_db" database --
CREATE DATABASE burgers_db;

use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(250) not null,
    devoured bool default false,
	primary key (id)
);

