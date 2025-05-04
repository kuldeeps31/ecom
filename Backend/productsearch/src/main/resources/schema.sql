CREATE TABLE IF NOT EXISTS product (
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    brand VARCHAR(100),
    category VARCHAR(100),
    image_url VARCHAR(500)
);
