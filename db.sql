drop database if exists db_retrogames;
create database db_retrogames;
use db_retrogames;

create table jogos(
    id int primary key auto_increment not null,
    titulo varchar(99) not null,
    plataforma varchar(99) not null,
    desenvolvedora varchar(200) not null,
    imagem_url varchar(1000) not null,
    preco decimal(10, 2) not null,
    data_cadastro datetime not null
);

insert into jogos(titulo, plataforma, desenvolvedora, imagem_url, preco, data_cadastro) values
("Celeste", "PC/Console", "Maddy Thorson", 
"https://cdn1.epicgames.com/b671fbc7be424e888c9346a9a6d3d9db/offer/Celeste%20-%20landscape%20offer%20image-2560x1440-0b9b94fd493d817704ecfdf4c704989a.jpg?resize=1&w=854&h=480&quality=medium",
60.00)