# Learning Playwright Fundamentals 2x

This repository contains a Playwright-based test automation project for learning end-to-end browser testing with modern web automation practices.

## Overview

The project is set up with:
- Playwright Test for browser automation
- A sample test suite under the `tests/` folder
- A configuration file for browser projects and reporting
- npm scripts for running tests locally

## Project Structure

- `tests/` - Playwright test files
- `playwright.config.ts` - Playwright configuration and test settings
- `package.json` - Dependencies and scripts
- `package-lock.json` - Locked dependency versions

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the test suite:
   ```bash
   npm test
   ```

3. Run Playwright tests directly:
   ```bash
   npx playwright test
   ```

4. Open the HTML report after a test run:
   ```bash
   npx playwright show-report
   ```

## Useful Commands

```bash
npx playwright test --headed
npx playwright test --project=chromium
npx playwright codegen
```

## Notes

- Generated artifacts such as `node_modules`, test results, and Playwright reports are ignored by Git.
- This repository is intended for learning and experimenting with Playwright fundamentals.
