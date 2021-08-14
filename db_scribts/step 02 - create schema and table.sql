create schema if not exists `nodejs_rest`;
use `nodejs_rest`;

create table if not exists `customers` (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  cEmail varchar(255) NOT NULL,
  cName varchar(255) NOT NULL,
  cActive BOOLEAN DEFAULT false
) ENGINE=InnoDB auto_increment = 1 DEFAULT CHARSET=latin1;	