CREATE TABLE orders (
    id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_number varchar(255) DEFAULT NULL, 
    quantity int(10),
    price decimal (10, 2),
    sku_code varchar(255)
);