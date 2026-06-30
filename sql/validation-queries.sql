-- ============================================================
-- Project 5 — Database Validation with SQL
-- Application: Demoblaze
-- URL: https://www.demoblaze.com
-- Tester: Mass Frat | June 2026
-- Purpose: Validate backend data matches what the UI displays
-- ============================================================


-- ── SQL-001: List All Products With Their Category ──────────
-- Purpose: Verify all products shown in the UI exist in the
-- database with the correct category assigned

SELECT
    p.id            AS product_id,
    p.title         AS product_name,
    p.price         AS price,
    c.name          AS category
FROM products p
JOIN categories c ON p.category_id = c.id
ORDER BY c.name, p.title;


-- ── SQL-002: Find Products Priced Above $500 ────────────────
-- Purpose: Validate expensive products match what the
-- Demoblaze store displays in the product listings

SELECT
    title           AS product_name,
    price           AS price,
    category_id     AS category
FROM products
WHERE price > 500
ORDER BY price DESC;


-- ── SQL-003: Count Products Per Category ────────────────────
-- Purpose: Confirm the number of products in each category
-- matches what appears when filtering by Phones, Laptops
-- and Monitors in the UI

SELECT
    c.name          AS category,
    COUNT(p.id)     AS total_products
FROM products p
JOIN categories c ON p.category_id = c.id
GROUP BY c.name
ORDER BY total_products DESC;


-- ── SQL-004: View All Orders With Customer Details ──────────
-- Purpose: Verify order records in the database match what
-- is stored after a purchase is completed on the site

SELECT
    o.id            AS order_id,
    u.username      AS customer,
    o.total         AS order_total,
    o.created_at    AS order_date
FROM orders o
JOIN users u ON o.user_id = u.id
ORDER BY o.created_at DESC;


-- ── SQL-005: Find Users Registered in the Last 30 Days ──────
-- Purpose: Data integrity check — confirm recently registered
-- test accounts exist in the database after registration

SELECT
    username        AS username,
    email           AS email,
    created_at      AS registered_date
FROM users
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
ORDER BY created_at DESC;
