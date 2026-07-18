# Learning Playwright Fundamentals 2x

This repository contains a Playwright test project for learning browser automation and end-to-end testing.

## Project structure

- `tests/` - Playwright test files
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npx playwright test
   ```
3. Open the HTML report:
   ```bash
   npx playwright show-report
   ```

## Notes

- The repository ignores generated artifacts such as `node_modules`, test results, and Playwright reports.
- The default test script runs Playwright tests with `npm test`.
