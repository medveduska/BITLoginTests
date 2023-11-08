## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the tests, make sure you have Node.js and npm installed. The project also uses TypeScript and Playwright.
For more info please check https://playwright.dev/docs/intro

### Installing

To get started with the project, install the dependencies by running:

npm install

Install playwright browsers by running

npx playwright install

### Setting Up Environment Variables

Create an .env file in the root of the project with the example.env content, replacing the values with your actual test credentials

Note: The .env file is ignored by git and should not be committed to the repository.

### Running the Tests

To  run the tests, execute:

npx playwright test

To run in headed mode execute:
npx playwright test --headed

For more option check playwright website

### Writing Tests

Tests are written using the Page Object Model pattern to encapsulate the logic of each page. Refer to the LoginPage class in loginPage.ts as an example.
Built With

    Playwright - The browser automation library
    TypeScript - The programming language used
    Node.js - The runtime environment