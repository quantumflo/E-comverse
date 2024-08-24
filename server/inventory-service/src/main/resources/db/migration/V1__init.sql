CREATE TABLE inventory (
  id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sku_code varchar(20) DEFAULT NULL,
  quantity int(11) DEFAULT NULL
);