create database reactdb
use reactdb
create table product(
id int,
name varchar(20),
description varchar(20),
price int
)

insert into product values(1,'iphone','Good',1000)
insert into product values(2,'macbook','Good',2000)

select * from product 

delete from product where id=4

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test'

flush privileges;