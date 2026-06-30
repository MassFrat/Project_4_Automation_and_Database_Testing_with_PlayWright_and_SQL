/ ============================================================
// Playwright Configuration
// Project 5 — Demoblaze Automation Testing
// Tester: Mass Frat | June 2026
// ============================================================

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    baseURL: 'https://www.demoblaze.com',
    browserName: 'firefox',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
