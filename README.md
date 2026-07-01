# Project 4 — Automation & Database Testing
## Playwright UI Automation + SQL Validation | Demoblaze Store



![Playwright](https://img.shields.io/badge/Playwright-6%20Tests%20Passed-45ba4b?logo=playwright)




![SQL](https://img.shields.io/badge/SQL-5%20Queries%20Passed-blue?logo=mysql)




![Status](https://img.shields.io/badge/Status-Completed-brightgreen)




![Browser](https://img.shields.io/badge/Browser-Firefox-FF7139?logo=firefox)



**Tester:** Mass Frat | **Date:** May/June 2026 | **Browser:** Firefox

---

## What Is This Project?

This project automates **6 UI test cases** on the Demoblaze store using Playwright, and validates **5 backend data queries** using SQL. It builds on manual testing completed in earlier projects and demonstrates automation and database skills for QA roles.

- **Application:** https://www.demoblaze.com
- **Automation:** Playwright (JavaScript)
- **Database:** MySQL (Ubuntu)

---

## Test Results Summary

| Type | Tool | Tests | Passed | Failed |
|---|---|:---:|:---:|:---:|
| UI Automation | Playwright | 6 | 6 | 0 |
| Data Validation | SQL | 5 | 5 | 0 |
| **Total** | | **11** | **11** | **0** |

---

## Playwright — Automated UI Tests

All 6 tests passed on Firefox.

| Test ID | Description | Result |
|---|---|:---:|
| TC-AUTO-001 | Homepage loads with correct title and navbar | ✅ Pass |
| TC-AUTO-002 | Laptops category filters and shows products | ✅ Pass |
| TC-AUTO-003 | Product detail page shows name and price | ✅ Pass |
| TC-AUTO-004 | Product can be added to cart | ✅ Pass |
| TC-AUTO-005 | Cart displays the correct item and price | ✅ Pass |
| TC-AUTO-006 | Item can be removed from the cart | ✅ Pass |

---

## SQL — Data Validation Queries

All 5 queries executed successfully against a locally created MySQL
database modelled on the Demoblaze store structure.

| Query ID | Description | Result |
|---|---|:---:|
| SQL-001 | List all products with their category | ✅ Pass |
| SQL-002 | Products priced above $500 | ✅ Pass |
| SQL-003 | Count of products per category | ✅ Pass |
| SQL-004 | All orders with customer details | ✅ Pass |
| SQL-005 | Users registered in the last 30 days | ✅ Pass |
