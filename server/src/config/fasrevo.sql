create database fasrevo;

use fasrevo;

create table users(
	uid int auto_increment primary key,
    username varchar(50) not null,
    password varchar(50) not null,
    role int,
    createdAt date,
    updatedAt date,
);

create table user_details(
	uid int,
    fullname text not null,
    image text,
    age int not null,
    sex int,
    address text not null,
    email text not null,
    createdAt date,
    updatedAt date,
    foreign key (uid) references user(uid)
);

create table categories(
	cid int auto_increment primary key,
    cname text
);

create table products(
	pid int auto_increment primary key,
    ptype int not null,
    pname text not null,
    image text not null,
    cost double not null,
    inStoke int not null,
    size text not null,
    color text,
    sex int,
    isDiscount int not null,
    discount double,
    createdAt date,
    updatedAt date,
    cid int,
    foreign key (cid) references category(cid)
);

create table product_details(
	pid int not null,
    texture text,
    design text,
    small_detail text,
    foreign key (pid) references product(pid)
);

create table cart(
	pid int not null,
    uid int not null,
    total double,
    quantity int,
    subtotal double,
    createAt date,
    foreign key (pid) references product(pid),
    foreign key (uid) references user(uid)
);

create table voucher(
	vid int auto_increment primary key,
    value double
);

create table user_voucher(
	id int auto_increment primary key,
    uid int not null,
    vid int not null,
    foreign key (uid) REFERENCES user(uid),
    foreign key (vid) references voucher(vid)
);