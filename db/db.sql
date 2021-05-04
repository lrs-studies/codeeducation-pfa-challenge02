use nodedb;
create table modules(id int auto_increment primary key, name varchar(256));
INSERT INTO modules(name) VALUES ("Docker Compose"), ("Kubernetes"), ("RabbitMQ");