# Learning Playwright Fundamentals 2x

This repository is a hands-on Playwright learning project for practicing end-to-end browser automation, locators, assertions, and test organization.

## What you will find here

- Playwright Test setup for browser-based automation
- Example test structure under the `tests/` folder
- Configured test runner and reporting support
- A simple project layout suitable for learning and experimentation

## Project structure

- `tests/` - Test files grouped by topic
- `playwright.config.ts` - Playwright configuration and browser settings
- `package.json` - Project dependencies and scripts
- `package-lock.json` - Locked dependency versions

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run all tests:
   ```bash
   npm test
   ```

3. Run Playwright directly:
   ```bash
   npx playwright test
   ```

4. Open the HTML report:
   ```bash
   npx playwright show-report
   ```

## Useful commands

```bash
npx playwright test --headed
npx playwright test --project=chromium
npx playwright codegen
```

## Notes

- Generated files such as `node_modules`, test results, and reports are ignored by Git.
- This repo is intended for learning and improving Playwright fundamentals step by step.
