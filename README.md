# Learning Playwright Fundamentals 2x

This repository is a hands-on Playwright learning project for practicing browser automation, locators, assertions, multiple contexts, and test organization.

## What you will find here

- Playwright Test setup for end-to-end automation
- Example test files under the `tests/` folder
- Configured test runner and HTML reporting support
- A simple project layout for learning and experimentation

## Project structure

- `tests/01_Basics/` - beginner-level Playwright examples
- `tests/02_first_tests/` - first test scripts and context-based examples
- `tests/03_Locators_Commands/` - locator and command practice
- `tests/04_Session_Storage/` - session-related examples
- `tests/05_Allure_Reporting/` - reporting-related files
- `tests/07_WebTables/` - table interaction and web element practice
- `playwright.config.ts` - Playwright configuration and browser settings
- `package.json` - project dependencies and scripts
- `package-lock.json` - locked dependency versions

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run all tests:
   ```bash
   npm test
   ```

3. Run a specific test file:
   ```bash
   npx playwright test tests/02_first_tests/236_BCP_TEST_PW.spec.ts
   ```

4. Open the HTML report after a run:
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
- This repository is intended for learning and improving Playwright fundamentals step by step.
