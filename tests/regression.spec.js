/ ============================================================
// Project 5 — Automation Testing with Playwright
// Application: Demoblaze
// URL: https://www.demoblaze.com
// Tester: Mass Frat | May 2026
// Adapted from manual smoke and regression test cases
// ============================================================

const { test, expect } = require('@playwright/test');

// ── TC-AUTO-001: Homepage Loads Successfully ────────────────
test('TC-AUTO-001 | Homepage loads with correct title and navbar', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/STORE/i);
  await expect(page.locator('.navbar-brand')).toHaveText(/PRODUCT STORE/i);
  await expect(page.locator('.card-title').first()).toBeVisible();
});

// ── TC-AUTO-002: Category Navigation Filters Products ───────
test('TC-AUTO-002 | Laptops category shows laptop products', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Laptops');
  await page.waitForTimeout(1000); // demoblaze re-renders the product grid via JS
  const productNames = page.locator('.card-title a');
  await expect(productNames.first()).toBeVisible();
  const count = await productNames.count();
  expect(count).toBeGreaterThan(0);
});

// ── TC-AUTO-003: Product Detail Page Loads ──────────────────
test('TC-AUTO-003 | Product detail page shows name and price', async ({ page }) => {
  await page.goto('/');
  await page.click('.card-title a >> nth=0');
  await expect(page.locator('.name')).toBeVisible();
  await expect(page.locator('.price-container')).toBeVisible();
});

// ── TC-AUTO-004: Add Product to Cart ────────────────────────
test('TC-AUTO-004 | Product can be added to cart', async ({ page }) => {
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });

  await page.goto('/');
  await page.click('.card-title a >> nth=0');
  await page.click('text=Add to cart');
  await page.waitForTimeout(1000); // allow the JS alert/dialog to resolve
});

// ── TC-AUTO-005: Cart Page Displays Added Item ──────────────
test('TC-AUTO-005 | Cart shows the correct item and price', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept());

  await page.goto('/');
  const productName = await page.locator('.card-title a >> nth=0').innerText();
  await page.click('.card-title a >> nth=0');
  await page.click('text=Add to cart');
  await page.waitForTimeout(1000);

  await page.click('#cartur');
  await expect(page.locator('#tbodyid')).toContainText(productName);
  await expect(page.locator('#totalp')).toBeVisible();
});

// ── TC-AUTO-006: Remove Item From Cart ──────────────────────
test('TC-AUTO-006 | Item can be removed from the cart', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept());

  await page.goto('/');
  await page.click('.card-title a >> nth=0');
  await page.click('text=Add to cart');
  await page.waitForTimeout(1000);

  await page.click('#cartur');
  await page.waitForSelector('#tbodyid tr');
  await page.click('text=Delete');
  await page.waitForTimeout(1000);

  await expect(page.locator('#tbodyid tr')).toHaveCount(0);
});
