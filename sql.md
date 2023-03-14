```
CREATE TABLE final_project.customers
(
    first_name character varying(100),
    last_name character varying(100),
    company_name character varying(100),
    address character varying(100),
    city character varying(100),
    county character varying(100),
    state character varying(100),
    zip bigint,
    phone1 character varying(100),
    phone2 character varying(100),
    email character varying(200),
    web character varying(200)
);

ALTER TABLE IF EXISTS final_project.customers
    OWNER to postgres;
```

```
COPY final_project.products(uniq_id,crawl_timestamp,product_url,product_name,product_category_tree,pid,retail_price,discounted_price,image,is_FK_Advantage_product,description,product_rating,overall_rating)
FROM '/Users/surjeet/Desktop/products.csv'
DELIMITER ','
CSV HEADER;
```
