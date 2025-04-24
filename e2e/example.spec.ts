import { test, expect } from "@playwright/test";

test("homepage visual regression", async ({ page }) => {
  await page.goto("http://localhost:5174/");

  // Capture d’écran full-page
  const shot = await page.screenshot({ fullPage: true });
  expect(shot).toMatchSnapshot("home-page.png", {
    maxDiffPixelRatio: 0.01 // allow up to 1% of pixels to differ
  });
});

test("register visual regression", async ({ page }) => {
  await page.goto("http://localhost:5174/register");

  // Capture d’écran full-page
  const shot = await page.screenshot({ fullPage: true });
  expect(shot).toMatchSnapshot("register-page.png", {
    maxDiffPixelRatio: 0.01 // allow up to 1% of pixels to differ
  });
});

test("tournament visual regression", async ({ page }) => {
  await page.goto("http://localhost:5174/tournament");

  // Capture d’écran full-page
  const shot = await page.screenshot({ fullPage: true });
  expect(shot).toMatchSnapshot("tournament-page.png", {
    maxDiffPixelRatio: 0.01 // allow up to 1% of pixels to differ
  });
});

test("results visual regression", async ({ page }) => {
  await page.goto("http://localhost:5174/results");

  // Capture d’écran full-page
  const shot = await page.screenshot({ fullPage: true });
  expect(shot).toMatchSnapshot("results-page.png", {
    maxDiffPixelRatio: 0.01 // allow up to 1% of pixels to differ
  });
});
